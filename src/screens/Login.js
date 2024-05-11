import React, { Suspense } from 'react';
import styles from '../styles/login.module.css';
import Image from 'next/image';
import LoginPage from '../components/login/LoginPage'

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

    return (
      <>
        <main>
            <div className={styles['login']}>
                <LoginPage/>
                <Image src="/images/login.png" alt="Mãos mexendo no celular" className="desktop-image" width={400} height={400} fetchpriority="high"/>
                <Image src="/images/login.png" alt="Mãos mexendo no celular" className="tablet-image" width={400} height={400} fetchpriority="high"/>
            </div>
        </main>
      </>
    );
}