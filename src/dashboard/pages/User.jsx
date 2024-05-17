import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/user.module.css';

export default function UserDashboard() {
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const storedFullName = localStorage.getItem('nome');
        if (storedFullName) {
            setFullName(storedFullName);
        }
    }, []);

    const firstName = fullName.split(' ')[0];

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.titulo}>Seja bem-vindo(a), {firstName}!</h1>
            <p className={styles.paragrafo}>No momento a área do usuário encontra-se em construção.</p>

            <div className={styles.imageContainer}>
                <Image 
                    src="/images/construcao.webp" 
                    alt="Em construção" 
                    className={styles.desktopImage} 
                    width={470} 
                    height={350} 
                    fetchPriority="high"
                />
                <Image 
                    src="/images/construcao.webp" 
                    alt="Em construção" 
                    className={styles.mobileImage} 
                    width={300} 
                    height={250} 
                    fetchPriority="high"
                />
            </div>
        </div>
    );
}
