import React from 'react';
import styles from '../styles/settings.module.css';
import InProgress from './inProgress';

export default function Settings() {

    return (
        <div className={styles.settings}>
            <h1>Configurações!</h1>
            <InProgress />
        </div>
    );
}