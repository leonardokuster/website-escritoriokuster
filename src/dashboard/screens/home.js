import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import styles from '../styles/home.module.css';
import CalculadoraRescisao from '../components/CalculadoraRecisao';

export default function Home() {
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const storedFullName = localStorage.getItem('nome');
        if (storedFullName) {
            setFullName(storedFullName);
        }
    }, []);

    const firstName = fullName.split(' ')[0];

    return (
        <Container className={styles['dashboard']}>
            <Paper elevation={3} className={styles['paper']}>
                <Typography variant="h4" gutterBottom>
                    Bem-vindo, {firstName}!
                </Typography>
                <Typography variant="body1" gutterBottom style={{textAlign: 'center'}}>
                    Selecione a opção desejada no menu acima.
                </Typography>
            </Paper>
            <Paper elevation={3} className={styles['paper']}>
                <CalculadoraRescisao />
            </Paper>
        </Container>
    );
}