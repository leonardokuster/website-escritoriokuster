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
                    console.log("Usuário recebido: ", userResponse.data);
                } else {
                    setUsuario(null);
                }
    
                const empresaResponse = await axios.get(`http://localhost:3001/companies/${usuario_id}`);
                if (empresaResponse.data && Array.isArray(empresaResponse.data)) {
                    setEmpresa(empresaResponse.data);
                    console.log("Empresas recebidas: ", empresaResponse.data);
                } else {
                    setEmpresa([]);
                }
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

    useEffect(() => {
        const fetchFuncionarios = async () => {
            if (usuario.empresa_id) {
                try {
                    const response = await axios.get(`http://localhost:3001/employees/${usuario.empresa_id}`);
                } catch (error) {
                    console.error('Erro ao buscar funcionários:', error);
                }
            }
        };
    
        fetchFuncionarios();
    }, [usuario.empresa_id]);

    const handleEmpresaChange = (event) => {
        const empresa_id = event.target.value;
        const empresaSelecionada = empresa.find(e => e.id.toString() === empresa_id);
        console.log('Empresa selecionada:', empresaSelecionada);
    
        setEmpresaSelecionada(empresaSelecionada);
    
        setUsuario(prevUsuario => ({
            ...prevUsuario,
            empresa_id: empresaSelecionada?.id
        }));
    };    
    
    const handleCadastroEmpresa = () => {
        setShowCadastroEmpresa(true);
        setShowTexto(false);
    };

    const handleListaFuncionarios = () => {
        console.log('Empresa selecionada:', empresaSelecionada);
        console.log(`ID da empresa: ${usuario.empresa_id || 'Nenhuma empresa associada'}`);
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
                                            <li className={styles['item']}>Para cadastrar uma nova empresa, <Link href="#" onClick={handleCadastroEmpresa}><strong>clique aqui</strong></Link>.</li>
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
                              <GerenciamentoFuncionarios empresa={empresa[0]} />
                            </div>
                        ): (
                            <div>
                                <h2 className={styles['titulo']}>Gerenciamento de funcionários - Empresa <strong>{empresa.nomeFantasia}</strong></h2>
                                <ul className={styles['lista']}>
                                    <li className={styles['item']}>Para cadastrar uma nova empresa, <Link href="#" onClick={handleCadastroEmpresa}><strong>clique aqui</strong></Link>.</li>
                                    <li className={styles['item']}>Para acessar a lista de funcionários atuais, <Link href="#" onClick={handleListaFuncionarios}><strong>clique aqui</strong></Link>.</li>
                                </ul> 
                                <CadastroFuncionario empresa={empresa[0]} />
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
