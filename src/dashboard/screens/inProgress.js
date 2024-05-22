import React from 'react';
import styles from '../styles/inProgress.module.css';
import Image from 'next/image';

export default function InProgress() {
    return (
        <div className={styles['inprogress']}>
            <Image src="/images/construcao.webp" alt="Imagem que representa um homem construindo o site" className={styles['desktopImage']} width={450} height={320} fetchpriority="high"/>
            <Image src="/images/construcao.webp" alt="Imagem que representa um homem construindo o site" className={styles['mobileImage']} width={350} height={250} fetchpriority="high"/>

            <h1>Em construção...</h1>
        </div>
    );
};