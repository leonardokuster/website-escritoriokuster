import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Loader from '@/src/components/Loader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../styles/tabelaEmpresas.module.css';
import CadastroFuncionario from '../components/cadastroFuncionario';
import CadastroEmpresa from '../components/cadastroEmpresa';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function GerenciamentoUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
    const [mostrarEmpresas, setMostrarEmpresas] = useState(false);
    const [mostrarFormularioEmpresa, setMostrarFormularioEmpresa] = useState(false);
    const [empresaFuncionarios, setEmpresaFuncionarios] = useState([]);

    useEffect(() => {
        const buscarUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false);
            }
        };
        buscarUsuarios();
    }, []);

    const handleVisualizarEmpresas = async (usuario) => {
        setUsuarioSelecionado(usuario);
        setMostrarEmpresas(true);
    };

    const handleVoltarUsuarios = () => {
        setMostrarEmpresas(false);
        setUsuarioSelecionado(null);
    };

    const handleEditarEmpresa = (empresa) => {
        setEmpresaSelecionada(empresa);
        setMostrarFormularioEmpresa(true);
    };

    const handleVoltarEmpresas = () => {
        setMostrarFormularioEmpresa(false);
        setEmpresaSelecionada(null);
    };

    const handleAdicionarNovaEmpresa = () => {
        setMostrarFormularioEmpresa(true);
        console.log("Adicionar nova empresa");
    };

    const handleListarFuncionarios = async (empresa) => {
        try {
            const response = await axios.get(`http://localhost:3001/employees/${empresa.id}`);
            setEmpresaFuncionarios(response.data);
        } catch (error) {
            console.error("Erro ao listar funcionários:", error);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <Box>
            <>
                <h2>Empresas vinculadas a {usuarioSelecionado?.nome}</h2>
                <TabelaEmpresas 
                    usuario={usuarioSelecionado} 
                    onEditarEmpresa={handleEditarEmpresa} 
                    onAdicionarNovaEmpresa={handleAdicionarNovaEmpresa}
                    onVoltar={handleVoltarUsuarios}
                    onListarFuncionarios={handleListarFuncionarios}
                />
                {mostrarFormularioEmpresa && empresaSelecionada && (
                    <FormularioEdicaoEmpresa 
                        empresa={empresaSelecionada} 
                        onVoltar={handleVoltarEmpresas}
                        funcionarios={empresaFuncionarios}
                    />
                )}
            </>
            {mostrarFormularioEmpresa && (
                <CadastroEmpresa />
            )}
        </Box>
    );
}

const TabelaUsuarios = ({ usuarios, onVisualizarEmpresas }) => (
    <TableContainer component={Paper}>
        <Table aria-label="tabela de usuários">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Nome</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Ações</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {usuarios.map((usuario) => (
                    <StyledTableRow key={usuario.id}>
                        <StyledTableCell>{usuario.nome}</StyledTableCell>
                        <StyledTableCell>{usuario.emailPessoal}</StyledTableCell>
                        <StyledTableCell>
                            <Button 
                                onClick={() => onVisualizarEmpresas(usuario)} 
                                variant="contained"
                            >
                                Visualizar Empresas
                            </Button>
                        </StyledTableCell >
                        <Button 
                            onClick={() => handleRevisarClick(usuario)} 
                            align="center"
                        >
                            Editar
                        </Button>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const TabelaEmpresas = ({ usuario, onEditarEmpresa, onAdicionarNovaEmpresa, onVoltar, onListarFuncionarios }) => {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        const buscarEmpresas = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/companies/${usuario.id}`);
                setEmpresas(response.data);
            } catch (error) {
                console.error("Erro ao buscar empresas:", error);
            }
        };
        buscarEmpresas();
    }, [usuario]);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="tabela de empresas">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>CNPJ</StyledTableCell>
                        <StyledTableCell>Ações</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {empresas.map((empresa) => (
                        <StyledTableRow key={empresa.id}>
                            <StyledTableCell>{empresa.nomeFantasia}</StyledTableCell>
                            <StyledTableCell>{empresa.cnpj}</StyledTableCell>
                            <StyledTableCell>
                                <Button 
                                    onClick={() => {
                                        onEditarEmpresa(empresa);
                                        onListarFuncionarios(empresa);
                                    }} 
                                    variant="contained"
                                >
                                    Editar
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                <Button variant="contained" onClick={onAdicionarNovaEmpresa}>Adicionar Nova Empresa</Button>
                <Button variant="contained" onClick={onVoltar}>Voltar</Button>
            </Box>
        </TableContainer>
    );
};

TabelaUsuarios.propTypes = {
    usuarios: PropTypes.array.isRequired,
    onVisualizarEmpresas: PropTypes.func.isRequired,
};

TabelaEmpresas.propTypes = {
    usuario: PropTypes.object.isRequired,
    onEditarEmpresa: PropTypes.func.isRequired,
    onAdicionarNovaEmpresa: PropTypes.func.isRequired,
    onVoltar: PropTypes.func.isRequired,
    onListarFuncionarios: PropTypes.func.isRequired,
};

const FormularioEdicaoEmpresa = ({ empresa, onVoltar, funcionarios }) => {
    const [formData, setFormData] = useState({ ...empresa });
    const [mostrarFormularioFuncionario, setMostrarFormularioFuncionario] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSalvar({ ...formData });
        console.log("Salvar empresa:", formData);
    };

    const handleAdicionarFuncionario = () => {
        setMostrarFormularioFuncionario(true);
    };

    const handleExcluirFuncionario = async (funcionarioId) => {
        console.log("Excluir funcionário:", funcionarioId);

        try {
            await axios.delete(`http://localhost:3001/employees/${funcionarioId}`);
            setFuncionarios((prevFuncionarios) => prevFuncionarios.filter(dep => dep.id !== funcionarioId));
        } catch (err) {
            setError('Ocorreu um erro ao excluir o funcionário. Por favor, tente novamente.');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className={styles['formulario']}>
            <Typography variant="h6">Editar Empresa</Typography>
            <div>
                <label>CNPJ:</label>
                <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Nome fantasia:</label>
                <input
                    type="text"
                    name="nomeFantasia"
                    value={formData.nomeFantasia}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>Razão social:</label>
                <input
                    type="text"
                    name="razaoSocial"
                    value={formData.razaoSocial}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>Atividades:</label>
                <input
                    type="text"
                    name="atividadesExercidas"
                    value={formData.atividadesExercidas}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>Capital social:</label>
                <input
                    type="text"
                    name="capitalSocial"
                    value={formData.capitalSocial}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>CEP:</label>
                <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={(e) => {
                        formik.handleChange(e);
                        fetchAddress(e.target.value);
                    }}
                />
            </div>
            <div className={styles['formField']}>
                <label>Endereço:</label>
                <input
                    type="text"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                />
                <label>Número:</label>
                <input
                    type="text"
                    name="numeroEmpresa"
                    value={formData.numeroEmpresa}
                    onChange={handleChange}
                />
                <label>Complemento:</label>
                <input
                    type="text"
                    name="complementoEmpresa"
                    value={formData.complementoEmpresa}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>E-mail:</label>
                <input
                    type="email"
                    name="emailEmpresa"
                    value={formData.emailEmpresa}
                    onChange={handleChange}
                />
                <label>Telefone:</label>
                <input
                    type="text"
                    name="telefoneEmpresa"
                    value={formData.telefoneEmpresa}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>Sócios:</label>
                <input
                    type="text"
                    name="socios"
                    value={formData.socios}
                    onChange={handleChange}
                />
            </div>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button type="submit">Salvar</Button>
                <Button type="button" onClick={onVoltar}>Cancelar</Button>
            </Box>
            <Typography variant="h6" sx={{ marginTop: 2 }}>Funcionários cadastrados</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="tabela de funcionários">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Email</StyledTableCell>
                            <StyledTableCell>Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {funcionarios.map((funcionario) => (
                            <StyledTableRow key={funcionario.id}>
                                <StyledTableCell>{funcionario.nome}</StyledTableCell>
                                <StyledTableCell>{funcionario.email}</StyledTableCell>
                                <StyledTableCell>
                                    <Button 
                                        variant="outlined" 
                                        onClick={() => handleExcluirFuncionario(funcionario.id)}
                                    >
                                        Excluir
                                    </Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                <Button variant="contained" onClick={handleAdicionarFuncionario}>Adicionar Funcionário</Button>
            </Box>
            {mostrarFormularioFuncionario && (
                <CadastroFuncionario />
            )}
        </Box>
    );
};

FormularioEdicaoEmpresa.propTypes = {
    empresa: PropTypes.object.isRequired,
    onVoltar: PropTypes.func.isRequired,
    funcionarios: PropTypes.array.isRequired,
};
