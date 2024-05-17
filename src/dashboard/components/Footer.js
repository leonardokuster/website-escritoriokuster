import React from 'react';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <p className={styles['paragrafo']}>&copy; 2024 Escritório Küster. Todos os direitos reservados.</p>
    </footer>
  );
}
