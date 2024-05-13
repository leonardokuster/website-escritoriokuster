import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import Image from 'next/image';
import LoginForm from '../components/login/formularios/LoginForm';
import SignupForm from '../components/login/formularios/SignupForm';
import Link from 'next/link';


export default function Login() {
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerWidth);
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [showLoginForm, setShowLoginForm] = useState(true);
    const handleToggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
      <>
        <main>
            <div className={styles['login']}>
                <div>
                {showLoginForm ? <LoginForm /> : <SignupForm />}
                <p>
                    {showLoginForm
                    ? "Ainda não tem uma conta? "
                    : "Já possui uma conta? "}
                    <Link href="#" onClick={handleToggleForm} style={{ alignSelf: 'center', fontWeight: 'normal', fontSize: '0.9em' }}>
                    <strong>{showLoginForm ? "Cadastre-se" : "Faça o login"}</strong>
                    </Link>
                </p>
                </div>
                <Image src="/images/login.png" alt="Mãos mexendo no celular" className="desktop-image" width={400} height={400} fetchpriority="high"/>
                <Image src="/images/login.png" alt="Mãos mexendo no celular" className="tablet-image" width={400} height={400} fetchpriority="high"/>
            </div>
        </main>
      </>
    );
}