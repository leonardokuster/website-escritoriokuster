import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Loader from '@/src/components/Loader';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputMask from 'react-input-mask';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { grey, blue } from '@mui/material/colors';
import styles from '../styles/tabelaDependentes.module.css';

const MaskedTextField = ({ mask, value, onChange, onBlur, ...props }) => (
    <InputMask mask={mask} value={value} onChange={onChange} onBlur={onBlur}>
        {(inputProps) => <TextField {...inputProps} {...props} />}
    </InputMask>
);

const TabelaDependentes = ({ funcionario_id  }) => {
    const [dependentes, setDependentes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAdding, setIsAdding] = useState(false); 

    const [nomeDependente, setNomeDependente] = useState('');
    const [dataNascimentoDependente, setDataNascimentoDependente] = useState('');
    const [cpfDependente, setCpfDependente] = useState('');
    const [localNascimentoDependente, setLocalNascimentoDependente] = useState('');

    const fetchDependentes = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/relatives/${funcionario_id}`);
            setDependentes(response.data);
            setError(null); 
        } catch (err) {
            setDependentes([]);
            setError('Ocorreu um erro ao buscar os dependentes. Por favor, tente novamente.');
        } finally {
            setLoading(false); 
        }
    };
    
    useEffect(() => {
        if (funcionario_id) {
            fetchDependentes();
        } else {
            setLoading(false);
            setError('Funcionário ID inválido.');
        }
    }, [funcionario_id]);  

    const handleAdd = () => setIsAdding(true);

    const handleSave = async () => {
        const novoDependente = {
            nomeDependente, 
            dataNascimentoDependente,
            cpfDependente,
            localNascimentoDependente,
            funcionario_id  
        };
    
        try {
            const response = await axios.post(`http://localhost:3001/relatives/${funcionario_id}`, novoDependente);
            
            if (response.data) {
                setIsAdding(false);
                setError(null);
    
                setNomeDependente('');
                setDataNascimentoDependente('');
                setCpfDependente('');
                setLocalNascimentoDependente('');

                await fetchDependentes(); 
            } else {
                setError('Dados do dependente não recebidos corretamente.');
            }
        } catch (err) {
            setError('Ocorreu um erro ao adicionar o dependente. Por favor, tente novamente.');
        }
    };   

    const handleDelete = async (dependente_id) => {
        try {
            await axios.delete(`http://localhost:3001/relatives/${dependente_id}`);
            setDependentes((prevDependentes) => prevDependentes.filter(dep => dep.id !== dependente_id));
        } catch (err) {
            setError('Ocorreu um erro ao excluir o dependente. Por favor, tente novamente.');
        }
    };

    const calcularIdade = (dataNascimento) => {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
    
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
    
        return idade;
    };

    if (loading) return <Loader />;

    return (
        <div>
            {dependentes.length === 0 ? (
                <p className={styles['paragrafo']}>Nenhum dependente cadastrado no momento.</p>
            ) : (
                <TableContainer component={Paper} className={styles['tabela']}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ backgroundColor: grey[900], color: 'white' }}>Nome</TableCell>
                                <TableCell sx={{ backgroundColor: grey[900], color: 'white' }}>Idade</TableCell>
                                <TableCell sx={{ backgroundColor: grey[900], color: 'white' }}>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dependentes.map(dependente => (
                                <TableRow key={dependente.id}>
                                    <TableCell>{dependente.nomeDependente}</TableCell>
                                    <TableCell>{calcularIdade(dependente.dataNascimentoDependente)} anos</TableCell>
                                    <TableCell>
                                        <IconButton 
                                            onClick={() => handleDelete(dependente.id)} 
                                            aria-label="delete"
                                            color="error"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {isAdding && (
                <Box>
                    <div className={styles['formulario']}> 
                        <TextField 
                            label="Nome completo" 
                            variant="standard" 
                            value={nomeDependente} 
                            onChange={(e) => setNomeDependente(e.target.value)} 
                            fullWidth
                            margin="normal"
                        />
                        <TextField 
                            label="Data de Nascimento" 
                            type="date" 
                            InputLabelProps={{ shrink: true }} 
                            variant="standard" 
                            value={dataNascimentoDependente} 
                            onChange={(e) => setDataNascimentoDependente(e.target.value)} 
                            fullWidth
                            margin="normal"
                        />
                        <MaskedTextField 
                            mask="999.999.999-99" 
                            label="CPF" 
                            variant="standard" 
                            value={cpfDependente} 
                            onChange={(e) => setCpfDependente(e.target.value)} 
                            fullWidth
                            margin="normal"
                        />
                        <TextField 
                            label="Local de nascimento" 
                            variant="standard" 
                            value={localNascimentoDependente} 
                            onChange={(e) => setLocalNascimentoDependente(e.target.value)} 
                            fullWidth
                            margin="normal"
                        />
                    </div>
                    <div className={styles['botoes']}>
                        <Button onClick={handleSave} variant="contained" color="primary">Salvar</Button>
                        <Button onClick={() => setIsAdding(false)} variant="outlined" color="secondary">Cancelar</Button>
                    </div>
                </Box>
            )}

            <Button onClick={handleAdd} variant="contained" color="primary" startIcon={<AddIcon />}>
                Novo Dependente
            </Button>
        </div>
    );
};

export default TabelaDependentes;
