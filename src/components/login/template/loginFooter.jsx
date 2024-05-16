import React from 'react';
import styles from '../../../styles/dashboard/loginFooter.module.css';

export default function loginFooter() {
  return (
    <div className={styles['footer']}>
        <h1 className={styles['titulo']}><strong>Escritório Küster</strong></h1>
        <p className={styles['paragrafo']}>Conduzindo o seu caminho para o sucesso empresarial, onde a excelência se encontra com a dedicação.</p>
    </div>
  );
}
