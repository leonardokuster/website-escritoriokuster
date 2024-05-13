import React, { Suspense } from 'react';
import styles from '../styles/screens/contact.module.css';
import Skeleton from '@mui/material/Skeleton';
import Form from '../components/form/Form';
import Image from 'next/image';

export default function Contact() {
    return (
      <>
        <main className={styles['contato']}>
            <div>
                <Suspense fallback={<Skeleton animation="wave" variant="rounded" width={253} height={440} />}>
                    <Image src="/images/callcenter.webp" alt="Mulher atentendo telefone" className="desktop-image" width={500} height={441} fetchpriority="high"/>
                    <Image src="/images/img-contato-tablet.webp" alt="Telefone recebendo mensagem" className="tablet-image" width={253} height={438} fetchpriority="high"/>
                </Suspense>
            </div>
                
            <div className={styles['formulario']}>
                <h2 className={styles['subtitulo']}>Preencha o formulário abaixo que entraremos em contato com você!</h2>
                    
                <Form 
                    showSecondTextField={false}
                    showSecondButton={{ enabled: true, link: "/services", target: "_self" }}
                    secondButtonText= "Conheça todos os serviços"
                />
            </div>
        </main>
      </>
    );
}