import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import styles from '../styles/tabelaUsuarios.module.css';

export default function UsuariosTable() {
    const [usuarios, setUsuarios] = useState([]);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        const fetchUserTypeAndUsuarios = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("Token não encontrado no localStorage");
                    return;
                }
                console.log("Token encontrado:", token);

                const storedUserType = localStorage.getItem('tipo');
                if (storedUserType) {
                    setUserType(storedUserType);
                } else {
                    console.error("Tipo de usuário não encontrado no localStorage");
                    return;
                }

                console.log("Tipo de usuário:", storedUserType);

                let apiUrl;

                if (storedUserType === 'admin') {
                    apiUrl = 'https://api-login-self.vercel.app/admin/findUser';
                } else if (storedUserType === 'collaborator') {
                    apiUrl = 'https://api-login-self.vercel.app/collaborator/findUser';
                } else {
                    console.error("Tipo de usuário não suportado:", storedUserType);
                    return;
                }

                const response = await axios.get(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                console.log("Resposta da API:", response.data);
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUserTypeAndUsuarios();
    }, []); 

    return (
        <div className={styles.clients}>
            <h1>Usuários cadastrados</h1>
            <TableContainer component={Paper} className={styles.container}>
                <Table className={styles.tabela}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles.th}>ID</TableCell>
                            <TableCell className={styles.th}>Nome</TableCell>
                            <TableCell className={styles.th}>E-mail</TableCell>
                            <TableCell className={styles.th}>Telefone</TableCell>
                            <TableCell className={styles.th}>CPF/CNPJ</TableCell>
                            <TableCell className={styles.th}>CEP</TableCell>
                            <TableCell className={styles.th}>Endereço</TableCell>
                            <TableCell className={styles.th}>nº</TableCell>
                            <TableCell className={styles.th}>Complemento</TableCell>
                            <TableCell className={styles.th}>Nascimento</TableCell>
                            <TableCell className={styles.th}>Tipo</TableCell>
                            <TableCell className={styles.th}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuarios.map((usuario) => (
                            <TableRow key={usuario.id}>
                                <TableCell className={styles.td}>{usuario.id}</TableCell>
                                <TableCell className={styles.td}>{usuario.nome}</TableCell>
                                <TableCell className={styles.td}>{usuario.email}</TableCell>
                                <TableCell className={styles.td}>{usuario.telefone}</TableCell>
                                <TableCell className={styles.td}>{usuario.cpfCnpj}</TableCell>
                                <TableCell className={styles.td}>{usuario.cep}</TableCell>
                                <TableCell className={styles.td}>{usuario.endereco}</TableCell>
                                <TableCell className={styles.td}>{usuario.numeroCasa}</TableCell>
                                <TableCell className={styles.td}>{usuario.complementoCasa}</TableCell>
                                <TableCell className={styles.td}>{usuario.dataNascimento}</TableCell>
                                <TableCell className={styles.td}>{usuario.tipo}</TableCell>
                                <TableCell className={styles.td}>
                                    <Button variant="contained" color="primary">
                                        Editar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}