import styles from '../../styles/components/feedbackcard.module.css';
import React, { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';

const LazyImage = React.lazy(() => import('next/image'));

export default function FeedbackCard(props) {
    return (
        <div className={styles['card']}>
            <Suspense fallback={<Skeleton animation="wave" variant="circular" width={54} height={53} />}>
                <LazyImage src={props.photo} alt="Foto de perfil" width={54} height={53} loading="lazy"/>
            </Suspense>
            <div>
                <p className={styles['description']}>{props.description}</p>
                <aside className={styles['personalInfo']}>{props.personalInfo}</aside>
            </div>
        </div>
    ); 
}