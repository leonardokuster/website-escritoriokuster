import React, { Suspense } from 'react';
import styles from '../styles/contact.module.css';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';

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
        <main className={styles['login']}>
            <div>
                <Suspense fallback={<Skeleton animation="wave" variant="rounded" width={380} height={460} />}>
                    <Image src="/images/construcao.webp" alt="Trabalhador carregando caixas" layout="responsive" width={width} height={height} priority={true}/>
                    <h2 >Em construção...</h2>
                </Suspense>
            </div>
        </main>
      </>
    );
}