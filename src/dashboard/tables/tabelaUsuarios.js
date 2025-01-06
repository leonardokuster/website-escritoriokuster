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
import CadastroEmpresa from '../components/cadastroEmpresa';
import CadastroFuncionario from '../components/cadastroFuncionario';
import CadastroDependente from '../components/cadastroDependente';

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
  
// MUDAR NOME DO ARQUIVO? ClientsTable

export default function UsuariosTable() {
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState([]); // Lista de usuários cadastrados na plataforma
    const [selectedUser, setSelectedUser] = useState(null); // Selecionar um usuário
    const [selectedCompany, setSelectedCompany] = useState(null); // Selecionar uma empresa
    const [selectedEmployee, setSelectedEmployee] = useState(null); // Selecionar um funcionário
    const [selectedRelative, setSelectedRelative] = useState(null); // Selecionar um dependente

    const [companiesPerUser, setCompaniesPerUser] = useState([]); // Lista de empresas por usuário
    const [employeesPerCompany, setEmployeesPerCompany] = useState([]); // Lista de funcionários por empresa
    const [relativesPerEmployee, setRelativesPerEmployee] = useState([]); // Lista de dependentes por funcionário
    
    const [addCompany, setAddCompany] = useState(false); // Formulário para adicionar nova empresa
    const [addEmployee, setAddEmployee] = useState(false); // Formulário para adicionar novo funcionário
    const [addRelative, setAddRelative] = useState(false); // Formulário para adicionar novo dependente

    const [editUser, setEditUser] = useState(false); // Formulário para editar usuário
    const [editCompany, setEditCompany] = useState(false); // Formulário para editar empresa
    const [editEmployee, setEditEmployee] = useState(false); // Formulário para editar funcionário
    const [editRelative, setEditRelative] = useState(false); // Formulário para editar dependente
    
    const [userType, setUserType] = useState('');
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Token não encontrado');        
                const storedUserType = localStorage.getItem('tipo');
                if (storedUserType) {
                    setUserType(storedUserType);
                } else {
                    console.error("Tipo de usuário não encontrado no localStorage");
                    return;
                }

                const response = await axios.get('http://localhost:3001/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                setUser(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <Box><Loader/></Box>;

    const handleDeleteRelative = async (relative) => {
        try {
        await axios.delete(`http://localhost:3001/relatives/${relative.id}`);
        setRelativesPerEmployee((prev) => prev.filter((rel) => rel.id !== relative.id));
        alert("Dependente excluído com sucesso.");
        } catch (error) {
        console.error("Erro ao excluir dependente:", error);
        alert("Erro ao excluir dependente. Tente novamente.");
        }
    };
    
    const handleDeleteEmployee = async (employee) => {
        try {
        await axios.delete(`http://localhost:3001/employees/${employee.id}`);
        setEmployeesPerCompany((prev) => prev.filter((emp) => emp.id !== employee.id));
        alert("Funcionário excluído com sucesso.");
        } catch (error) {
        console.error("Erro ao excluir funcionário:", error);
        alert("Erro ao excluir funcionário. Tente novamente.");
        }
    };
    
    const handleDeleteCompany = async (company) => {
        try {
        await axios.delete(`http://localhost:3001/companies/${company.id}`);
        setCompaniesPerUser((prev) => prev.filter((comp) => comp.id !== company.id));
        alert("Empresa excluída com sucesso.");
        } catch (error) {
        console.error("Erro ao excluir empresa:", error);
        alert("Erro ao excluir empresa. Tente novamente.");
        }
    };
    
    const handleDeleteUser = async (user) => {
        try {
        await axios.delete(`http://localhost:3001/users/${user.id}`);
        setUser((prev) => prev.filter((usr) => usr.id !== user.id));
        alert("Usuário excluído com sucesso.");
        } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        alert("Erro ao excluir usuário. Tente novamente.");
        }
    };
    
    const handleAddRelative = (employee) => {
        if (!employee?.id) {
            console.error('Funcionário inválido para adicionar novo dependente:', employee);
            return;
          }    
          setSelectedEmployee(employee); // Define o funcionário selecionado
          setAddRelative(true); // Abre o formulário para cadastro de dependente
      };
        
      if (addRelative) {
          return (
            <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Cadastro de Dependente para: <strong>{selectedEmployee?.nome}</strong>
              </Typography>
              <CadastroDependente
                employee_id={selectedEmployee?.id} 
                onAdicionarNovoDependente={(newRelative) => {
                  setRelativesPerEmployee((prevRelatives) => ({
                    ...prevRelatives,
                    relatives: [...prevRelatives.relatives, newRelative],
                  }));
                  setAddRelative(false);
                  setRelativesPerEmployee(true);
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    setAddRelative(false);
                    setRelativesPerEmployee(true);
                  }}
                  sx={{ width: '100%' }}
                >
                  Voltar
                </Button>
              </Box>
            </Box>
        );
    };
    
    const handleAddEmployee = (company) => {
        if (!company?.id) {
            console.error('Empresa inválida para adicionar novo funcionário:', company);
            return;
          }
          setSelectedCompany(company); // Define a empresa selecionada
          setAddEmployee(true); // Abre o formulário para cadastro de funcionário
    };
        
    if (addEmployee) {
        return (
            <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4 }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Cadastro de Funcionário para: <strong>{selectedCompany?.nome}</strong>
                </Typography>
                <CadastroFuncionario
                company_id={selectedCompany?.id} 
                onAdicionarNovoFuncionario={(newEmployee) => {
                    setEmployeesPerCompany((prevEmployees) => ({
                    ...prevEmployees,
                    employees: [...prevEmployees.employees, newEmployee],
                    }));
                    setAddEmployee(false);
                    setEmployeesPerCompany(true);
                }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button
                    type="button"
                    variant="outlined"
                    onClick={() => {
                    setAddEmployee(false);
                    setEmployeesPerCompany(true);
                    }}
                    sx={{ width: '100%' }}
                >
                    Voltar
                </Button>
                </Box>
            </Box>
        );
    };
    
    const handleAddCompany = (user) => {
        if(!user?.id) {
            console.error('Usuário inválido para adicionar nova empresa:', user);
            return;
        }
        setSelectedUser(user); // Define o usuário selecionado
        setAddCompany(true); // Abre formulário para cadastro de empresa
    };

    if(addCompany) {
        return (
            <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4 }}>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Cadastro de Empresa para: <strong>{selectedUser?.nome}</strong>
              </Typography>
              <CadastroEmpresa
                user_id={selectedUser?.id} 
                onAdicionarNovaEmpresa={(newCompany) => {
                    setCompaniesPerUser((prevCompanies) => ({
                    ...prevCompanies,
                    companies: [...prevCompanies.companies, newCompany],
                  }));
                  setAddCompany(false);
                  setCompaniesPerUser(true);
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() => {
                    setAddCompany(false);
                    setCompaniesPerUser(true);
                  }}
                  sx={{ width: '100%' }}
                >
                  Voltar
                </Button>
              </Box>
            </Box>
        );
    };
    
    const handleEditRelative = (relative) => {
        setSelectedRelative(relative);
    };
    
    const handleEditEmployee = (employee) => {
        setSelectedEmployee(employee);
    };
    
    const handleEditCompany = (company) => {
        setSelectedCompany(company);
    };
    
    const handleEditUser = (user) => {
        setSelectedUser(user);
    };
    
    const handleShowRelatives = async (employeeId) => {
        try {
        const response = await axios.get(`http://localhost:3001/relatives?employeeId=${employeeId}`);
        setRelativesPerEmployee(response.data);
        } catch (error) {
        console.error("Erro ao buscar dependentes:", error);
        alert("Erro ao buscar dependentes. Tente novamente.");
        }
    };
    
    const handleShowEmployees = async (companyId) => {
        try {
        const response = await axios.get(`http://localhost:3001/employees?companyId=${companyId}`);
        setEmployeesPerCompany(response.data);
        } catch (error) {
        console.error("Erro ao buscar funcionários:", error);
        alert("Erro ao buscar funcionários. Tente novamente.");
        }
    };
    
    const handleShowCompanies = async (userId) => {
        try {
        const response = await axios.get(`http://localhost:3001/companies?userId=${userId}`);
        setCompaniesPerUser(response.data);
        } catch (error) {
        console.error("Erro ao buscar empresas:", error);
        alert("Erro ao buscar empresas. Tente novamente.");
        }
    };

    const handleSaveUser = async (usuarioEditado) => {
        try {
            const user_id = selectedUser?.id;
            const response = await axios.put(`http://localhost:3001/users/${user_id}`, usuarioEditado);
            setUser((prev) => prev.map((u) => (u.id === response.data.id ? response.data : u)));
            setSelectedUser(null);
        } catch (error) {
            console.error('Erro ao salvar edição do usuário:', error.message);
        }
    };
    
    const handleRevisarClick = (user) => {
        setSelectedUser(user);
    };  
   
    return (
        <Box>
            {selectedRelative ? (
                <EditarDependente
                relative={selectedRelative}
                onExcluirDependente={handleDeleteRelative}
                onCancelar={() => setSelectedRelative(null)}
                />
            ) : selectedEmployee ? (
                <EditarFuncionario
                employee={selectedEmployee}
                onExcluirFuncionario={handleDeleteEmployee}
                onCancelar={() => setSelectedEmployee(null)}
                />
            ) : selectedCompany ? (
                <EditarEmpresa
                empresa={selectedCompany}
                onExcluirEmpresa={handleDeleteCompany}
                onCancelar={() => setSelectedCompany(null)}
                />
            ) : selectedUser ? (
                <EditarUsuario
                usuario={selectedUser}
                onExcluirUsuario={handleDeleteUser}
                onSalvar={handleSaveUser}
                onCancelar={() => setSelectedUser(null)}
                />
            ) : relativesPerEmployee.length > 0 ? (
                <ListaDependentesPorFuncionario
                dependentes={relativesPerEmployee}
                onVoltar={() => {
                    setRelativesPerEmployee([]);
                    setSelectedEmployee(null);
                }}
                onEditarDependente={handleEditRelative}
                onAdicionarNovoDependente={handleAddRelative}
                />
            ) : employeesPerCompany.length > 0 ? (
                <ListaFuncionariosPorEmpresa
                funcionarios={employeesPerCompany}
                onVoltar={() => {
                    setEmployeesPerCompany([]);
                    setSelectedCompany(null);
                }}
                onEditarFuncionario={handleEditEmployee}
                onExibirDependentes={handleShowRelatives}
                onAdicionarNovoFuncionario={handleAddEmployee}
                />
            ) : companiesPerUser.length > 0 ? (
                <ListaEmpresasPorUsuario
                usuario={companiesPerUser}
                onVoltar={() => {
                    setCompaniesPerUser([]);
                    setSelectedUser(null);
                }}
                onEditarEmpresa={handleEditCompany}
                onAdicionarNovaEmpresa={handleAddCompany}
                onExibirFuncionarios={handleShowEmployees}
                />
            ) : (
                <ListaUsuarios
                usuario={user}
                onRevisarClick={handleRevisarClick}
                onExibirEmpresas={handleShowCompanies}
                onEditar={handleEditUser}
                />
            )}
        </Box>
    );      
}

const ListaUsuarios = ({ usuario, onExibirEmpresas, onRevisarClick }) => (
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
                {usuario.map((usuario) => (
                    usuario.id ? (
                        <StyledTableRow key={usuario.id}>
                            <StyledTableCell component="th" scope="row">
                                {usuario.nome}
                            </StyledTableCell>
                            <StyledTableCell align="center" className={styles['esconderMobile']}>{usuario.emailPessoal}</StyledTableCell>
                            <StyledTableCell align="center" className={styles['esconderMobile']}>{getTipoUsuario(usuario.tipo)}</StyledTableCell>
                            <StyledTableCell align="center">
                                <div className={styles['botoes']}>
                                    <Button onClick={() => onExibirEmpresas(usuario)} className={styles['actionButton']}>
                                        Empresas
                                    </Button>
                                    <Button onClick={() => onRevisarClick(usuario)} variant="contained" className={styles['actionButton']}>
                                        Informações<br/>Usuário
                                    </Button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ) : (
                        console.error("Usuário sem ID encontrado:", usuario)
                    )  
                ))}          
            </TableBody>
        </Table>
    </TableContainer>
);

const EditarUsuario = ({ usuario, onSalvar, onCancelar, onExcluirUsuario, userType }) => {
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
                <Button
                    type="button"
                    color="error"
                    variant="contained"
                    className={styles['eraseButton']}
                    onClick={() => {
                        if (usuario && usuario.id) {
                        onExcluirUsuario(usuario);
                        } else {
                        console.error("Erro: Não foi possível excluir usuario:", usuario);
                        }
                    }}
                >Excluir</Button>
                <button type="submit">Salvar</button>
                <button type="button" onClick={onCancelar}>Cancelar</button>
            </Box>
        </Box>
    );
};

const ListaEmpresasPorUsuario = ({ usuario, onEditarEmpresa, onAdicionarNovaEmpresa, onExibirFuncionarios, onVoltar }) => {
    const [empresas, setEmpresas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (usuario && usuario.id) {
          const buscarEmpresas = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/companies/${usuario.id}`);
              setEmpresas(response.data);
            } catch (error) {
              console.error("Erro ao buscar empresas:", error);
            } finally {
              setLoading(false); 
            }
          };
          buscarEmpresas();
        } else {
          setLoading(false);
        }
    }, [usuario]);

    if (loading) return <div><Loader/></div>; 
    
    return (
        <Box>
            {empresas.length > 0 ? (
            <TableContainer component={Paper}>
            <Table aria-label="tabela de empresas">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Nome</StyledTableCell>
                    <StyledTableCell align="center" className={styles['esconderMobile']}>CNPJ</StyledTableCell>
                    <StyledTableCell align="center">Ações</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {empresas.map((empresa) => (
                    <StyledTableRow key={empresa.id}>
                    <StyledTableCell component="th" scope="row">{empresa.nomeFantasia}</StyledTableCell>
                    <StyledTableCell align="center" className={styles['esconderMobile']}>{empresa.cnpj}</StyledTableCell>
                    <StyledTableCell align="center">
                        <div className={styles['botoes']}>
                            <Button onClick={() => onExibirFuncionarios(empresa)} className={styles['actionButton']}>
                            Funcionários
                            </Button>
                            <Button
                                onClick={() => onEditarEmpresa(empresa)}
                                variant="contained"
                            >
                            Informações
                            </Button>
                        </div>
                    </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        ) : (
            <TableContainer component={Paper}>
                <Box sx={{ textAlign: 'center', margin: 2 }}>
                    <Typography variant="h6">Este usuário não possui empresas cadastradas.</Typography>
                </Box>
            </TableContainer>
        )}
            <TableContainer component={Paper}>
                <Box sx={{ display: 'flex', margin: 2, justifyContent: 'space-between' }}>
                    <Button variant="contained" onClick={() => onAdicionarNovaEmpresa(usuario)}>Adicionar Nova Empresa</Button>
                    <Button variant="contained" onClick={onVoltar}>Voltar</Button>
                </Box>
            </TableContainer>
        </Box>
    );
};

const EditarEmpresa = ({ empresa, onCancelar, onExcluirEmpresa }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        ...empresa,
        socios: Array.isArray(empresa.socios)
            ? empresa.socios.map((socio) => socio.nomeSocio || socio)
            : [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'socios' ? value.split(',').map((socio) => socio.trim()) : value,
        }));
    };

    const handleSalvarEmpresa = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/companies/${empresa.id}`, formData);
            console.log("Resposta da API:", response.data);
            setIsEditing(false); // Sai do modo de edição
        } catch (error) {
            console.error("Erro ao salvar dados da empresa:", error);
        }
    };

    const handleCancelarEdicao = () => {
        setIsEditing(false);
        setFormData({
            ...empresa,
            socios: Array.isArray(empresa.socios) ? empresa.socios.map((socio) => socio.nomeSocio || socio) : [],
        });
    };

    if (!empresa) {
        return <Typography variant="h6" sx={{ textAlign: "center" }}>Nenhuma empresa selecionada.</Typography>;
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                {isEditing ? "Editar Empresa" : "Detalhes da Empresa"}
            </Typography>
            <Box>
                {Object.entries(formData).map(([key, value]) => (
                    key !== "socios" && (
                        <Typography key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: </strong>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name={key}
                                    value={value || ""}
                                    onChange={handleChange}
                                    style={{ width: "100%", margin: "4px 0", padding: "6px" }}
                                />
                            ) : (
                                value || "N/A"
                            )}
                        </Typography>
                    )
                ))}
                <Typography>
                    <strong>Sócios: </strong>
                    {isEditing ? (
                        <input
                            type="text"
                            name="socios"
                            value={Array.isArray(formData.socios) ? formData.socios.join(", ") : ""}
                            onChange={handleChange}
                            style={{ width: "100%", margin: "4px 0", padding: "6px" }}
                        />
                    ) : (
                        formData.socios.length > 0 ? formData.socios.join(", ") : "Nenhum sócio cadastrado."
                    )}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, marginTop: 3, justifyContent: "center" }}>
                {!isEditing && (
                    <>
                        <Button variant="contained" color="primary" onClick={toggleFuncionarios}>
                            Funcionários
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={onCancelar}>
                            Voltar
                        </Button>
                        <Button variant="contained" color="success" onClick={() => setIsEditing(true)}>
                            Editar
                        </Button>
                    </>
                )}
                {isEditing && (
                    <>
                        <Button variant="contained" color="error" onClick={() => onExcluirEmpresa(empresa)}>
                            Excluir
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSalvarEmpresa}>
                            Salvar
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleCancelarEdicao}>
                            Cancelar
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

const ListaFuncionariosPorEmpresa = ({ funcionarios, onAdicionarNovoFuncionario, onVoltar, onExibirDependentes, onEditarFuncionario }) => {

    useEffect(() => {
        console.log("Estado atualizado de funcionarios:", funcionarios);
    }, [funcionarios]);

      
    return (
        <Box>
          <Typography variant="h6">Funcionários cadastrados</Typography>
            {Array.isArray(funcionarios) && funcionarios.length > 0 ? (
                <TableContainer component={Paper}>
                <Table aria-label="tabela de funcionários">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell>Função</StyledTableCell>
                        <StyledTableCell>Salário</StyledTableCell>
                        <StyledTableCell>Ações</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {funcionarios?.map((funcionario) => (
                        <StyledTableRow key={funcionario.id}>
                        <StyledTableCell>{funcionario.nome}</StyledTableCell>
                        <StyledTableCell>{funcionario.funcao}</StyledTableCell>
                        <StyledTableCell>{funcionario.salario}</StyledTableCell>
                        <StyledTableCell>
                            <Button variant="outlined" onClick={() => onExibirDependentes(funcionario)}>Dependentes</Button>
                            <Button variant="outlined" onClick={() => onEditarFuncionario(funcionario.id)}>Informações</Button>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                        Nenhum funcionário cadastrado.
                    </Typography>
                </Box>
            )}
            <TableContainer component={Paper}>
                <Box sx={{ display: 'flex', margin: 2, justifyContent: 'space-between' }}>
                    <Button variant="contained" onClick={() => onAdicionarNovoFuncionario(empresa)}>Adicionar Funcionário</Button>
                    <Button variant="contained" onClick={onVoltar}>Voltar</Button>
                </Box>
            </TableContainer>
        </Box>
    );
};

const EditarFuncionario = ({ employee, onCancelar, onExcluirFuncionario }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        ...employee,
        dependentes: funcionario.dependentes || [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSalvarFuncionario = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3001/employees/${employee.id}`, formData);
            console.log("Resposta da API:", response.data);
            setIsEditing(false); // Sai do modo de edição
            onCancelar();
        } catch (error) {
            console.error("Erro ao salvar dados do funcionário:", error);
            setError('Não foi possível salvar os dados. Tente novamente.');
        }
    };

    if (!employee) {
        return <Typography variant="h6" sx={{ textAlign: "center" }}>Nenhum funcionário selecionado.</Typography>;
    }

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                {isEditing ? "Editar funcionário" : "Detalhes do funcionário"}
            </Typography>
            <Box>
                {Object.entries(formData).map(([key, value]) => (
                    key !== "dependentes" && (
                        <Typography key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}: </strong>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name={key}
                                    value={value || ""}
                                    onChange={handleChange}
                                    style={{ width: "100%", margin: "4px 0", padding: "6px" }}
                                />
                            ) : (
                                value || "N/A"
                            )}
                        </Typography>
                    )
                ))}
                <Typography>
                    <strong>Dependentes: </strong>
                    {isEditing ? (
                        <input
                            type="text"
                            name="dependentes"
                            value={Array.isArray(formData.dependentes) ? formData.dependentes.join(", ") : ""}
                            onChange={handleChange}
                            style={{ width: "100%", margin: "4px 0", padding: "6px" }}
                        />
                    ) : (
                        formData.dependentes.length > 0 ? formData.dependentes.join(", ") : "Nenhum dependente cadastrado."
                    )}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, marginTop: 3, justifyContent: "center" }}>
                {!isEditing && (
                    <>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h5" sx={{ marginBottom: 2 }}>Detalhes da Empresa</Typography>
                        <div className={styles['formField']}>
                            <Typography><strong>Nome:</strong> {funcionario.nome}</Typography>
                            <Typography><strong>E-mail:</strong> {funcionario.email}</Typography>
                            <Typography><strong>Telefone:</strong> {funcionario.telefone}</Typography>
                            <Typography><strong>Sexo:</strong> {funcionario.sexo}</Typography>
                            <Typography><strong>Cor/Etnia:</strong> {funcionario.corEtnia}</Typography>
                            <Typography><strong>Data nascimento:</strong> {funcionario.dataNascimento}</Typography>
                            <Typography><strong>Local nascimento:</strong> {funcionario.localNascimento}</Typography>
                            <Typography><strong>CPF:</strong> {funcionario.cpf}</Typography>
                            <Typography><strong>RG:</strong> {funcionario.rg}</Typography>
                            <Typography><strong>Órgão expedidor:</strong> {funcionario.orgaoExpedidor}</Typography>
                            <Typography><strong>Emissão:</strong> {funcionario.dataRg}</Typography>
                            <Typography><strong>CEP:</strong> {funcionario.cep}</Typography>
                            <Typography><strong>Endereço:</strong> {funcionario.endereco}</Typography>
                            <Typography><strong>Nº:</strong> {funcionario.numeroCasa}</Typography>
                            <Typography><strong>Complemento:</strong> {funcionario.complementoCasa}</Typography>
                            <Typography><strong>Bairro:</strong> {funcionario.bairro}</Typography>
                            <Typography><strong>Cidade:</strong> {funcionario.cidade}</Typography>
                            <Typography><strong>Estado:</strong> {funcionario.estado}</Typography>
                            <Typography><strong>Nome mãe:</strong> {funcionario.nomeMae}</Typography>
                            <Typography><strong>Nome pai:</strong> {funcionario.nomePai}</Typography>
                            <Typography><strong>Escolaridade:</strong> {funcionario.escolaridade}</Typography>
                            <Typography><strong>Estado civil:</strong> {funcionario.estadoCivil}</Typography>
                            <Typography><strong>Nome cônjuge:</strong> {funcionario.nomeConjuge}</Typography>
                            <Typography><strong>PIS:</strong> {funcionario.pis}</Typography>
                            <Typography><strong>Carteira de trabalho:</strong> {funcionario.numeroCt}</Typography>
                            <Typography><strong>Série:</strong> {funcionario.serie}</Typography>
                            <Typography><strong>Data:</strong> {funcionario.dataCt}</Typography>
                            <Typography><strong>Carteira digital:</strong> {funcionario.carteiraDigital}</Typography>
                            <Typography><strong>Título eleitoral:</strong> {funcionario.tituloEleitoral}</Typography>
                            <Typography><strong>Zona:</strong> {funcionario.zona}</Typography>
                            <Typography><strong>Seção:</strong> {funcionario.secao}</Typography>
                            <Typography><strong>Função:</strong> {funcionario.funcao}</Typography>
                            <Typography><strong>Admissão:</strong> {funcionario.dataAdmissao}</Typography>
                            <Typography><strong>Salário:</strong> {funcionario.salario}</Typography>
                            <Typography><strong>Contrato experiência:</strong> {funcionario.contratoExperiencia}</Typography>
                            <Typography><strong>Horários:</strong> {funcionario.horarios}</Typography>
                            <Typography><strong>Insalubridade:</strong> {funcionario.insalubridade}</Typography>
                            <Typography><strong>Periculosidade:</strong> {funcionario.periculosidade}</Typography>
                            <Typography><strong>Quebra de caixa:</strong> {funcionario.quebraDeCaixa}</Typography>
                            <Typography><strong>Vale transporte:</strong> {funcionario.valeTransporte}</Typography>
                            <Typography><strong>Quantidade:</strong> {funcionario.quantidadeVales}</Typography>

                            <Typography><strong>Dependentes:</strong> 
                            {formData.dependentes.map((dependente, index) => (
                                <Box key={index}>
                                    <Typography><strong>Nome:</strong> {dependente.nomeDependente}</Typography>
                                    <Typography><strong>Data nascimento:</strong> {dependente.dataNascimentoDependente}</Typography>
                                    <Typography><strong>CPF:</strong> {dependente.cpfDependente}</Typography>
                                    <Typography><strong>Local nascimento:</strong> {dependente.localNascimentoDependente}</Typography>
                                </Box>
                            ))}
                            </Typography>
                        </div>
                        <Box sx={{ display: "flex", gap: 2, marginTop: 3, justifyContent: "center" }}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                onClick={toggleFuncionarios}
                            >
                                Funcionários
                            </Button>
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                onClick={onVoltar}
                            >
                                Voltar
                            </Button>
                        </Box>
                        {mostrarFuncionarios && (
                            <Box sx={{ marginTop: 4 }}>
                                {funcionarios.length > 0 ? (
                                    <div>
                                        <Typography variant="h6">Lista de Funcionários</Typography>
                                        <ul>
                                            {funcionarios.map((funcionario) => (
                                                <li key={funcionario.id}>
                                                    <Typography><strong>Nome:</strong> {funcionario.nome}</Typography>
                                                    <Typography><strong>Função:</strong> {funcionario.funcao}</Typography>
                                                    <Typography><strong>Salário:</strong> {funcionario.salario}</Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <Box sx={{ textAlign: "center", marginTop: 2 }}>
                                        <Typography variant="body1">Nenhum funcionário cadastrado.</Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ marginTop: 2 }}
                                            onClick={onAdicionarNovoFuncionario}
                                        >
                                            Adicionar Novo Funcionário
                                        </Button>
                                    </Box>
                                )}
                            </Box>
                        )}
                        <Button variant="contained" color="primary" onClick={toggleDependentes}>
                            Dependentes
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={onCancelar}>
                            Voltar
                        </Button>
                        <Button variant="contained" color="success" onClick={() => setIsEditing(true)}>
                            Editar
                        </Button>
                    </Box>
                    </>
                )}
                {isEditing && (
                    <>
                        <Box component="form" onSubmit={handleSalvarFuncionario} className={styles['formulario']}>
                            <Typography variant="h6">Editar Funcionário</Typography>
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
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Telefone:</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Sexo:</label>
                                <input
                                    type="text"
                                    name="sexo"
                                    value={formData.sexo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Cor/Etnia:</label>
                                <input
                                    type="text"
                                    name="corEtnia"
                                    value={formData.corEtnia}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Data nascimento:</label>
                                <input
                                    type="text"
                                    name="dataNascimento"
                                    value={formData.dataNascimento}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Local nascimento:</label>
                                <input
                                    type="text"
                                    name="localNascimento"
                                    value={formData.localNascimento}
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
                            <div className={styles['formField']}>
                                <label>RG:</label>
                                <input
                                    type="text"
                                    name="rg"
                                    value={formData.rg}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Órgão expedidor:</label>
                                <input
                                    type="text"
                                    name="orgaoExpedidor"
                                    value={formData.orgaoExpedidor}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Emissão:</label>
                                <input
                                    type="text"
                                    name="dataRg"
                                    value={formData.dataRg}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>CEP:</label>
                                <input
                                    type="text"
                                    name="cep"
                                    value={formData.cep}
                                    onChange={handleChange}
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
                            </div>
                            <div className={styles['formField']}>
                                <label>Nº:</label>
                                <input
                                    type="text"
                                    name="numeroCasa"
                                    value={formData.numeroCasa}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Complemento:</label>
                                <input
                                    type="text"
                                    name="complementoCasa"
                                    value={formData.complementoCasa}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Bairro:</label>
                                <input
                                    type="text"
                                    name="bairro"
                                    value={formData.bairro}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Cidade:</label>
                                <input
                                    type="text"
                                    name="cidade"
                                    value={formData.cidade}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Estado:</label>
                                <input
                                    type="text"
                                    name="estado"
                                    value={formData.estado}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Nome mãe:</label>
                                <input
                                    type="text"
                                    name="nomeMae"
                                    value={formData.nomeMae}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Nome pai:</label>
                                <input
                                    type="text"
                                    name="nomePai"
                                    value={formData.nomePai}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Escolaridade:</label>
                                <input
                                    type="text"
                                    name="escolaridade"
                                    value={formData.escolaridade}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Estado civil:</label>
                                <input
                                    type="text"
                                    name="estadoCivil"
                                    value={formData.estadoCivil}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Nome cônjuge:</label>
                                <input
                                    type="text"
                                    name="nomeConjuge"
                                    value={formData.nomeConjuge}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>PIS:</label>
                                <input
                                    type="text"
                                    name="pis"
                                    value={formData.pis}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Carteira de trabalho:</label>
                                <input
                                    type="text"
                                    name="numeroCt"
                                    value={formData.numeroCt}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Série:</label>
                                <input
                                    type="text"
                                    name="serie"
                                    value={formData.serie}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Data:</label>
                                <input
                                    type="text"
                                    name="dataCt"
                                    value={formData.dataCt}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Carteira digital:</label>
                                <input
                                    type="text"
                                    name="carteiraDigital"
                                    value={formData.carteiraDigital}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Título eleitoral:</label>
                                <input
                                    type="text"
                                    name="tituloEleitoral"
                                    value={formData.tituloEleitoral}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Zona:</label>
                                <input
                                    type="text"
                                    name="zona"
                                    value={formData.zona}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Seção:</label>
                                <input
                                    type="text"
                                    name="secao"
                                    value={formData.secao}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Função:</label>
                                <input
                                    type="text"
                                    name="funcao"
                                    value={formData.funcao}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Admissao:</label>
                                <input
                                    type="text"
                                    name="dataAdmissao"
                                    value={formData.dataAdmissao}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Salário:</label>
                                <input
                                    type="text"
                                    name="salario"
                                    value={formData.salario}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Contrato experiência:</label>
                                <input
                                    type="text"
                                    name="contratoExperiencia"
                                    value={formData.contratoExperiencia}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Horários:</label>
                                <input
                                    type="text"
                                    name="horarios"
                                    value={formData.horarios}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Insalubridade:</label>
                                <input
                                    type="text"
                                    name="insalubridade"
                                    value={formData.insalubridade}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Periculosidade:</label>
                                <input
                                    type="text"
                                    name="periculosidade"
                                    value={formData.periculoridade}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Quebra de caixa:</label>
                                <input
                                    type="text"
                                    name="quebraDeCaixa"
                                    value={formData.quebraDeCaixa}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Vale transporte:</label>
                                <input
                                    type="text"
                                    name="valeTransporte"
                                    value={formData.valeTransporte}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles['formField']}>
                                <label>Quantidade:</label>
                                <input
                                    type="text"
                                    name="quantidadeVales"
                                    value={formData.quantidadeVales}
                                    onChange={handleChange}
                                />
                            </div>
                            <Button variant="contained" color="error" onClick={() => onExcluirFuncionario(employee)}>
                                Excluir
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleSalvarFuncionario}>
                                Salvar
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={handleCancelarEdicao}>
                                Cancelar
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

//const ListaDependentesPorFuncionario = ({}) = {};

//const EditarDependente = ({}) = {};


ListaUsuarios.propTypes = {
    usuario: PropTypes.arrayOf(PropTypes.shape({
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

EditarUsuario.propTypes = {
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
    onExcluirUsuario: PropTypes.func.isRequired,
};

ListaEmpresasPorUsuario.propTypes = {
    usuario: PropTypes.object.isRequired,
    onEditarEmpresa: PropTypes.func.isRequired,
    onAdicionarNovaEmpresa: PropTypes.func.isRequired,
    onVoltar: PropTypes.func.isRequired,
    onExibirFuncionarios: PropTypes.func.isRequired,
};

EditarEmpresa.propTypes = {
    empresa: PropTypes.object.isRequired,
    onCancelar: PropTypes.func.isRequired,
    onExcluirEmpresa: PropTypes.func.isRequired,
};

ListaFuncionariosPorEmpresa.propTypes = {
    funcionarios: PropTypes.object.isRequired,
    onAdicionarNovoFuncionario: PropTypes.func.isRequired,
    onExibirDependentes: PropTypes.func.isRequired,
    onEditarFuncionario: PropTypes.func.isRequired,
    onVoltar: PropTypes.func.isRequired,
};

EditarFuncionario.propTypes = {
    funcionario: PropTypes.object.isRequired,
    onCancelar: PropTypes.func.isRequired,
    onExcluirFuncionario: PropTypes.func.isRequired,
};
/*
ListaDependentesPorFuncionario.propTypes = {
    dependentes: PropTypes.object.isRequired,
    onAdicionarNovoDependente: PropTypes.func.isRequired,
    onEditarDependente: PropTypes.func.isRequired,
    onVoltar: PropTypes.func.isRequired,
};

EditarDependente.propTypes = {
    dependente: PropTypes.object.isRequired,
    onCancelar: PropTypes.func.isRequired,
    onExcluirDependente: PropTypes.func.isRequired,
};
*/