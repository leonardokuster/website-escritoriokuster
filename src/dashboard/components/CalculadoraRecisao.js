import React, { useState } from 'react';
import styles from '../styles/calculadoraRecisao.module.css';

const CalculadoraRescisao = () => {
    const [salarioBase, setSalarioBase] = useState('');
    const [anosTrabalhados, setAnosTrabalhados] = useState('');
    const [avisoPrevio, setAvisoPrevio] = useState('');
    const [temAviso, setTemAviso] = useState(false);
    const [temMultaFGTS, setTemMultaFGTS] = useState(false);
    const [saldoFGTS, setSaldoFGTS] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularRescisao = () => {
        const salarioBaseNum = parseFloat(salarioBase);
        const anosTrabalhadosNum = parseInt(anosTrabalhados);
        const avisoPrevioNum = parseFloat(avisoPrevio);
        const saldoFGTSNum = parseFloat(saldoFGTS);

        if (isNaN(salarioBaseNum) || isNaN(anosTrabalhadosNum) || isNaN(avisoPrevioNum) || isNaN(saldoFGTSNum)) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Cálculos conforme a fórmula
        const valorAvisoPrevio = temAviso ? salarioBaseNum * avisoPrevioNum : 0;
        const proporcionalDecimoTerceiro = salarioBaseNum / 12 * anosTrabalhadosNum;
        const proporcionalFerias = salarioBaseNum / 12 * anosTrabalhadosNum;
        const tercoFerias = proporcionalFerias / 3;
        const fgts = saldoFGTSNum + salarioBaseNum * 0.08; // incluindo saldo FGTS atualizado
        const multaFGTS = temMultaFGTS ? fgts * 0.4 : 0;
        const totalRescisao = salarioBaseNum + valorAvisoPrevio + proporcionalDecimoTerceiro +
                               proporcionalFerias + tercoFerias + multaFGTS;

        setResultado({
            salarioBase: salarioBaseNum.toFixed(2),
            avisoPrevio: valorAvisoPrevio.toFixed(2),
            decimoTerceiroProporcional: proporcionalDecimoTerceiro.toFixed(2),
            feriasProporcionais: proporcionalFerias.toFixed(2),
            tercoFerias: tercoFerias.toFixed(2),
            saldoFGTS: saldoFGTSNum.toFixed(2),
            multaFGTS: multaFGTS.toFixed(2),
            totalRescisao: totalRescisao.toFixed(2)
        });
    };

    return (
        <div>
            <h2>Rescisão Trabalhista</h2>
            <form className={styles['formulario']}>
                <label>
                    Empresa:
                    
                </label>
                <br />
                <label>
                    Funcionário:
                    
                </label>
                <br />
                <label>
                    Salário Base:
                    <input type="number" value={salarioBase} onChange={(e) => setSalarioBase(e.target.value)} />
                </label>
                <br />
                <label>
                    Anos Trabalhados:
                    <input type="number" value={anosTrabalhados} onChange={(e) => setAnosTrabalhados(e.target.value)} />
                </label>
                <br />
                <label>
                    Aviso Prévio (em meses):
                    <input type="number" value={avisoPrevio} onChange={(e) => setAvisoPrevio(e.target.value)} />
                </label>
                <br />
                <label>
                    Tem Aviso Prévio Indenizado?
                    <input type="checkbox" checked={temAviso} onChange={() => setTemAviso(!temAviso)} />
                </label>
                <br />
                <label>
                    Tem Multa de 40% do FGTS?
                    <input type="checkbox" checked={temMultaFGTS} onChange={() => setTemMultaFGTS(!temMultaFGTS)} />
                </label>
                <br />
                <label>
                    Saldo do FGTS Atualizado:
                    <input type="number" value={saldoFGTS} onChange={(e) => setSaldoFGTS(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={calcularRescisao}>Calcular</button>
            </form>

            {resultado && (
                <div>
                    <h3>Resultado da Rescisão:</h3>
                    <p>Salário Base: R$ {resultado.salarioBase}</p>
                    <p>Aviso Prévio: R$ {resultado.avisoPrevio}</p>
                    <p>Décimo Terceiro Proporcional: R$ {resultado.decimoTerceiroProporcional}</p>
                    <p>Férias Proporcionais: R$ {resultado.feriasProporcionais}</p>
                    <p>Terço de Férias: R$ {resultado.tercoFerias}</p>
                    <p>Saldo do FGTS Atualizado: R$ {resultado.saldoFGTS}</p>
                    <p>Multa do FGTS: R$ {resultado.multaFGTS}</p>
                    <p><strong>Total da Rescisão: R$ {resultado.totalRescisao}</strong></p>
                </div>
            )}
        </div>
    );
};

export default CalculadoraRescisao;