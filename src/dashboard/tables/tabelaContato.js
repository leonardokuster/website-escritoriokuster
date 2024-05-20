import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from '../styles/tabelaContato.module.css';

export default function ContatosTable() {
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        async function fetchContatos() {
            try {
                const response = await axios.get('https://api-formulario.vercel.app/contato/verificarContatos');
                setContatos(response.data);
            } catch (error) {
                console.error("Erro ao buscar contatos:", error);
            }
        }
        fetchContatos();
    }, []);

    const handleStatusChange = async (id, status) => {
        try {
            await axios.patch(`https://api-formulario.vercel.app/contato/atualizarStatus/${id}/status`, { status });
            setContatos(contatos.map(contato => 
                contato.id === id ? { ...contato, status } : contato
            ));
        } catch (error) {
            console.error("Erro ao atualizar status:", error);
        }
    };

    return (
        <TableContainer component={Paper} className={styles.container}>
            <Table className={styles.tabela}>
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.th}>ID</TableCell>
                        <TableCell className={styles.th}>Assunto</TableCell>
                        <TableCell className={styles.th}>Nome</TableCell>
                        <TableCell className={styles.th}>Email</TableCell>
                        <TableCell className={styles.th}>Telefone</TableCell>
                        <TableCell className={styles.th}>Mensagem</TableCell>
                        <TableCell className={styles.th}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contatos.map((contato) => (
                        <TableRow key={contato.id} className={contato.status === 'respondido' ? styles.respondido : ''}>
                            <TableCell className={styles.td}>{contato.id}</TableCell>
                            <TableCell className={styles.td}>{contato.subject}</TableCell>
                            <TableCell className={styles.td}>{contato.fullname}</TableCell>
                            <TableCell className={styles.td}>{contato.email}</TableCell>
                            <TableCell className={styles.td}>{contato.phone}</TableCell>
                            <TableCell className={styles.td}>{contato.content}</TableCell>
                            <TableCell className={styles.td}>
                                <Select
                                    value={contato.status || 'pendente'}
                                    onChange={(e) => handleStatusChange(contato.id, e.target.value)}
                                    className={styles.select}
                                >
                                    <MenuItem value="pendente" style={{ fontSize: 'small' }}>Pendente</MenuItem>
                                    <MenuItem value="respondido" style={{ fontSize: 'small' }}>Respondido</MenuItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}