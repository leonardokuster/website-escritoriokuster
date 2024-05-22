import React from 'react';
import styles from '../styles/notFound.module.css';
import { Container, Typography, Paper } from '@mui/material';
import Image from 'next/image';

export default function NotFound() {
    return (
        <Container className={styles['dashboard']}>
            <Paper elevation={3} className={styles['paper']}>
                <Typography variant="h4" gutterBottom>
                    Página não encontrada
                </Typography>
                <Image src="/images/notfound.webp" alt="Erro 404 - Página não encontrada" className={styles['desktopImage']} width={400} height={300} fetchpriority="high"/>
                <Image src="/images/notfound.webp" alt="Erro 404 - Página não encontrada" className={styles['mobileImage']} width={200} height={150} fetchpriority="high"/>
            </Paper>
        </Container>
    );
};