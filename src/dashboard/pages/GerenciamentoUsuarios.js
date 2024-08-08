import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CadastroEmpresa from '../components/cadastroEmpresa';
import CadastroFuncionario from '../components/cadastroFuncionario';
import GerenciamentoFuncionarios from '../components/tabelaFuncionarios';
import Link from 'next/link';
import styles from '../styles/gerenciamentoUsuarios.module.css';
import Loader from '@/src/components/Loader';

export default function GerenciamentoUsuarios() {
    const [usuario, setUsuario] = useState(null);
    const [empresa, setEmpresa] = useState([]);
    const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showCadastroEmpresa, setShowCadastroEmpresa] = useState(false);
    const [showListaFuncionarios, setShowListaFuncionarios] = useState(false);
    const [showTexto, setShowTexto] = useState(true);

    useEffect(() => {
        const verificarEmpresa = async () => {
            const usuario_id = localStorage.getItem('usuario_id');
            
            if (!usuario_id) {
                setError('ID do usuário não fornecido');
                setLoading(false);
                return;
            }

            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${usuario_id}`);
                if (userResponse.data && userResponse.data.cpf) {
                    setUsuario(userResponse.data);
                } else {
                    setUsuario(null);
                }

                const empresaResponse = await axios.get(`http://localhost:3001/companies/${usuario_id}`);
                if (empresaResponse.data && Array.isArray(empresaResponse.data)) {
                    setEmpresa(empresaResponse.data);
                } else {
                    setEmpresa([]);
                }
                console.log("Empresas recebidas: ", empresaResponse.data);
            } catch (error) {
                console.error('Erro ao verificar empresa do usuário:', error);
                if (error.response && error.response.status === 404) {
                    setEmpresa([]);
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
        const empresaSelecionada = empresa.find(e => e.id === empresa_id);
        setEmpresaSelecionada(empresaSelecionada);
    };

    const handleCadastroEpresa = () => {
        setShowCadastroEmpresa(true);
        setShowTexto(false);
    };

    const handleListaFuncionarios = () => {
        setShowListaFuncionarios(true);
        setShowTexto(false);
    };

    if (loading) {
        return <div><Loader /></div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
        {empresa ? (
            <div>
                {usuario.qntEmpresas > 1 ? (
                    <div> 
                        {showTexto && (
                            <div> 
                                <h2 className={styles['titulo']}>Selecione a empresa que deseja gerenciar:</h2>
                                <select onChange={handleEmpresaChange} className={styles['seletor']}>
                                    <option value="">Selecione uma empresa</option>
                                    {empresa.map(empresa => (
                                        <option key={empresa.id} value={empresa.id}>{empresa.nomeFantasia}</option>
                                    ))}
                                </select>
                            </div>
                        )}                 
                            
                        {empresaSelecionada && (
                            <div>
                                {showCadastroEmpresa ? (
                                    <div>
                                        <h2 className={styles['titulo']}>Cadastro de Novo Funcionário</h2> 
                                        <h3 className={styles['subtitulo']}>Preencha os campos abaixo para adicionar um novo funcionário à empresa <strong>{empresaSelecionada.nomeFantasia}</strong>:</h3> 
                                        <CadastroEmpresa />
                                    </div>
                                ) : showListaFuncionarios ? (
                                    <div>
                                      <h2 className={styles['titulo']}>Lista de Funcionários - Empresa <strong>{empresaSelecionada.nomeFantasia}</strong>.</h2>
                                      <GerenciamentoFuncionarios empresa={empresaSelecionada} />
                                    </div>
                                ): (
                                    <div>
                                        <br/>
                                        <h2 className={styles['titulo']}>Gerenciamento de funcionários - Empresa <strong>{empresaSelecionada.nomeFantasia}</strong>.</h2>
                                        <ul className={styles['lista']}>
                                            <li className={styles['item']}>Para cadastrar uma nova empresa, <Link href="#" onClick={handleCadastroEpresa}><strong>clique aqui</strong></Link>.</li>
                                            <li className={styles['item']}>Para acessar a lista de funcionários atuais, <Link href="#" onClick={handleListaFuncionarios}><strong>clique aqui</strong></Link>.</li>
                                        </ul> 
                                        <CadastroFuncionario empresa={empresaSelecionada} />
                                    </div>
                                )}         
                            </div>
                        )}
                    </div>
                ) : (
                    <div> 
                        {showCadastroEmpresa ? (
                            <div>
                                <h2 className={styles['titulo']}>Cadastro de Novo Funcionário</h2> 
                                <h3 className={styles['subtitulo']}>Preencha os campos abaixo para adicionar um novo funcionário à empresa <strong>{empresa.nomeFantasia}</strong>:</h3> 
                                <CadastroEmpresa />
                            </div>
                         ) : showListaFuncionarios ? (
                            <div>
                              <h2 className={styles['titulo']}>Lista de Funcionários - Empresa <strong>{empresa.nomeFantasia}</strong>.</h2>
                              <GerenciamentoFuncionarios empresa={empresa} />
                            </div>
                        ): (
                            <div>
                                <h2 className={styles['titulo']}>Gerenciamento de funcionários - Empresa <strong>{empresa.nomeFantasia}</strong></h2>
                                <ul className={styles['lista']}>
                                    <li className={styles['item']}>Para cadastrar uma nova empresa, <Link href="#" onClick={handleCadastroEpresa}><strong>clique aqui</strong></Link>.</li>
                                    <li className={styles['item']}>Para acessar a lista de funcionários atuais, <Link href="#" onClick={handleListaFuncionarios}><strong>clique aqui</strong></Link>.</li>
                                </ul> 
                                <CadastroFuncionario empresa={empresa} />
                            </div>
                        )}            
                    </div>    
                )}
            </div>
        ) : (
            <div>
            <h2 className={styles['titulo']}>Atualmente você não possui nenhuma empresa cadastrada, preencha os dados abaixo para realizar o cadastro.</h2>
            <CadastroEmpresa />
            </div>
        )}
        </div>
    );
}
