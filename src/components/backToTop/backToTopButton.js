import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from './backToTopButton.module.css';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }

    return (
        <>
            {isVisible && (
                <IconButton
                    className={styles['backToTopButton']} 
                    onClick={scrollToTop}
                    aria-label="Voltar ao topo da página"
                    size="large"
                    color="primary"
                    sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
                >
                    <ArrowUpwardIcon />
                </IconButton>
            )}
        </>
    );
}
