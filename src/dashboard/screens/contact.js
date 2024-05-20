import React from 'react';
import ContatosTable from '../tables/tabelaContato';
import styles from '../styles/contact.module.css';

export default function Contact() {

    return (
        <div className={styles['contact']}>
            <h1>Solicitações de contato</h1>
            <ContatosTable />
        </div>
    );
}