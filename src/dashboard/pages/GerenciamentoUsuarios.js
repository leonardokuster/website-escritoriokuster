import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CadastroEmpresa from '../components/cadastroEmpresa';
import CadastroFuncionario from '../components/cadastroFuncionario';
import Link from 'next/link';
import styles from '../styles/gerenciamentoUsuarios.module.css';

export default function GerenciamentoUsuarios() {
  const [empresa, setEmpresa] = useState([]);
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCadastroEmpresa, setShowCadastroEmpresa] = useState(false);

  useEffect(() => {
    const verificarEmpresa = async () => {
        const usuario_id = localStorage.getItem('usuario_id');
        
        if (!usuario_id) {
            setError('ID do usuário não fornecido');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3001/companies/${usuario_id}`);
            if (response.data && response.data.cnpj) {
                setEmpresa(response.data);
            } else {
                setEmpresa(null);
            }
        } catch (error) {
            console.error('Erro ao verificar empresa do usuário:', error);
            if (error.response && error.response.status === 404) {
                setEmpresa(null);
            } else {
                setError(error.response?.data?.message || 'Erro ao verificar empresa');
            }
        } finally {
            setLoading(false);
        }
    };

    verificarEmpresa();
  }, []);

  const handleEmpresaChange = (event) => {
    const empresa_id = event.target.value;
    const empresa = empresa.find(e => e.id === empresa_id);
    setEmpresaSelecionada(empresa);
  };

  const handleFormChange = () => {
    setShowCadastroEmpresa(true);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {empresa ? (
        <div>
            {empresa.length > 1 ? (
                <div> 
                    <h2>Selecione uma empresa para gerenciar os funcionários</h2>
                    <select onChange={handleEmpresaChange}>
                        <option value="">Selecione uma empresa</option>
                        {empresa.map(empresa => (
                        <option key={empresa.id} value={empresa.id}>{empresa.nomeFantasia}</option>
                        ))}
                    </select>
                    {empresaSelecionada && (
                        <div>
                        <h2>Gerenciamento de funcionários para a empresa {empresaSelecionada.nomeFantasia}</h2>
                        <CadastroFuncionario empresa={empresaSelecionada} />
                        </div>
                    )}
                </div>
            ) : (
                <div> 
                    {showCadastroEmpresa ? (
                        <div>
                            <h2 className={styles['titulo']}>Preencha os dados abaixo para cadastrar uma nova empresa.</h2> 
                            <CadastroEmpresa />
                        </div>
                    ): (
                        <div>
                            <h2 className={styles['titulo']}>Gerenciamento de funcionários para a empresa <strong>{empresa.nomeFantasia}</strong>.<br/> Caso queira cadastar uma nova empresa, <Link href="#" onClick={handleFormChange}><strong>clique aqui</strong></Link>.</h2> 
                            <CadastroFuncionario empresa={empresa} />
                        </div>
                    )}            
                </div>    
            )}
        </div>
      ) : (
        <div>
          <h2>Atualmente você não possui nenhuma empresa cadastrada, preencha os dados abaixo para realizar o cadastro.</h2>
          <CadastroEmpresa />
        </div>
      )}
    </div>
  );
}
