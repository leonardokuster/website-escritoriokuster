import React from 'react';
import styles from '../styles/home.module.css';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

export default function NotFound() {
    return (
        <Container className={styles.dashboard}>
            <Paper elevation={3} className={styles.paper}>
                <Typography variant="h4" gutterBottom>
                    Página não encontrada
                </Typography>
            </Paper>
        </Container>
    );
};