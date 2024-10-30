import * as React from 'react';
import { useEffect, useState } from 'react';
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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Loader from '@/src/components/Loader';
import Button from '@mui/material/Button';
import styles from '../styles/tabelaUsuarios.module.css';
import GerenciamentoEmpresas from '../tables/tabelaEmpresas';

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

const getTipoUsuario = (tipo) => {
    switch (tipo) {
      case 'admin':
        return 'Administrador';
      case 'collaborator':
        return 'Colaborador';
      case 'user':
        return 'Usuário';
      default:
        return 'Desconhecido'; 
    }
};
  
export default function UsuariosTable() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [mostrarEmpresas, setMostrarEmpresas] = useState(false);
    const [usuarioEmpresas, setUsuarioEmpresas] = useState(null);

    const [userType, setUserType] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserTypeAndUsuarios = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("Token não encontrado no localStorage");
                    return;
                }

                const storedUserType = localStorage.getItem('tipo');
                if (storedUserType) {
                    setUserType(storedUserType);
                } else {
                    console.error("Tipo de usuário não encontrado no localStorage");
                    return;
                }

                let apiUrl = 'http://localhost:3001/users'; 

                const response = await axios.get(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserTypeAndUsuarios();
    }, []);

    const handleVisualizarEmpresas = async (usuario) => {
        setUsuarioSelecionado(usuario);
        setMostrarEmpresas(true);
    };

    const handleRevisarClick = (usuario) => {
        setUsuarioSelecionado(usuario);
    };

    const handleShowCompany = (usuario) => {
        setUsuarioEmpresas(usuario); 
        setMostrarEmpresas(true); 
    };
        
    const handleCancelarEdicao = () => {
        setUsuarioSelecionado(null);
    };

    const handleSalvarEdicao = async (usuarioEditado) => {
        const usuario_id = usuarioSelecionado?.id; 

        try {
            const response = await axios.put(`http://localhost:3001/users/${usuario_id}`, usuarioEditado);
            setUsuarios((prev) => prev.map((f) => (f.id === response.data.id ? response.data : f)));
            setUsuarioSelecionado(null);
        } catch (error) {
            console.error('Erro ao salvar edição do usuário:', error.message);
        }
    };

    if (loading) {
        return <div><Loader/></div>;
    }

    return (
        <Box>
            {mostrarEmpresas && usuarioEmpresas ? (
                <GerenciamentoEmpresas 
                    usuarioSelecionado={usuarioEmpresas.id}
                    onVisualizarEmpresas={handleVisualizarEmpresas} 
                />
            ) : usuarioSelecionado ? (
                <div>
                    <FormularioEdicaoUsuario
                        usuario={usuarioSelecionado}
                        onCancelar={handleCancelarEdicao}
                        onSalvar={handleSalvarEdicao}
                        userType={userType}
                    />
                </div>
            ) : (
                <div>
                    <h1>Clientes cadastrados</h1>
                    <TabelaUsuarios
                        usuarios={usuarios}
                        onRevisarClick={handleRevisarClick}
                        showCompany={handleShowCompany}
                    />
                </div>
            )}
        </Box>
    );
}

const TabelaUsuarios = ({ usuarios, showCompany, onRevisarClick }) => (
    <TableContainer component={Paper}>
        <Table className={styles['tabela']} aria-label="tabela de usuários">
            <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Nome</StyledTableCell>
                    <StyledTableCell align="center" className={styles['esconderMobile']}>E-mail</StyledTableCell>
                    <StyledTableCell align="center" className={styles['esconderMobile']}>Tipo</StyledTableCell>
                    <StyledTableCell align="center">Ações</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {usuarios.map((usuario) => (
                    <StyledTableRow key={usuario.id}>
                        <StyledTableCell component="th" scope="row">
                            {usuario.nome}
                        </StyledTableCell>
                        <StyledTableCell align="center" className={styles['esconderMobile']}>{usuario.emailPessoal}</StyledTableCell>
                        <StyledTableCell align="center" className={styles['esconderMobile']}>{getTipoUsuario(usuario.tipo)}</StyledTableCell>
                        {usuario.qntEmpresas > 1 ? (
                            <StyledTableCell align="center">
                                <div className={styles['botoes']}>
                                    <Button onClick={() => showCompany(usuario)} >
                                        Empresas
                                    </Button>
                                    <Button onClick={() => onRevisarClick(usuario)} variant="contained">
                                        Editar Usuário
                                    </Button>
                                </div>
                            </StyledTableCell>
                        ): (
                            <StyledTableCell align="left">
                            <div className={styles['botoes']}>
                                <Button  disabled>
                                    Empresas
                                </Button>
                                <Button onClick={() => onRevisarClick(usuario)} variant="contained">
                                    Editar Usuário
                                </Button>
                            </div>
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

const FormularioEdicaoUsuario = ({ usuario, onCancelar, onSalvar, userType }) => {
    const [formData, setFormData] = useState({ ...usuario });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSalvar({ ...formData });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className={styles['formulario']}>
            <Typography variant="h6" sx={{ marginTop: '15px' }}>Editar Usuário</Typography>
            <div className={styles['formField']}>
                <label>Nome:</label>
                <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>E-mail:</label>
                <input
                    type="email"
                    name="emailPessoal"
                    value={formData.emailPessoal}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>Telefone:</label>
                <input
                    type="text"
                    name="telefonePessoal"
                    value={formData.telefonePessoal}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['formField']}>
                <label>CPF:</label>
                <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                />
            </div>
            <div className={styles['coluna']}>
                {userType === 'admin' && (
                    <div className={styles['formField']}>
                        <label>Tipo:</label>
                        <select
                            name="tipo"
                            value={formData.tipo}
                            onChange={handleChange}
                        >
                            <option value="">
                                <em>Selecione</em>
                            </option>
                            <option value="admin">Administrador</option>
                            <option value="collaborator">Colaborador</option>
                            <option value="user">Usuário</option>
                        </select>
                    </div>
                )}
                <div className={styles['formField']}>
                    <label>Data nascimento:</label>
                    <input
                        type="date"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <Box sx={{ display: 'flex', gap: 2 }} className={styles['buttonContainer']}>
                <button type="submit">Salvar</button>
                <button type="button" onClick={onCancelar}>Cancelar</button>
            </Box>
        </Box>
    );
};

TabelaUsuarios.propTypes = {
    usuarios: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nome: PropTypes.string.isRequired,
        cpf: PropTypes.string.isRequired,
        emailPessoal: PropTypes.string.isRequired,
        telefonePessoal: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
    })).isRequired,
    onRevisarClick: PropTypes.func.isRequired,
    showCompany: PropTypes.func.isRequired,
};

FormularioEdicaoUsuario.propTypes = {
    usuario: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nome: PropTypes.string.isRequired,
        cpf: PropTypes.string.isRequired,
        emailPessoal: PropTypes.string.isRequired,
        telefonePessoal: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
    }).isRequired,
    onCancelar: PropTypes.func.isRequired,
    onSalvar: PropTypes.func.isRequired,
};