import styles from '../../styles/components/button.module.css';
import React from 'react';

export default function Button(props) {
    return (
        <button className={styles['bttn']}>{props.description}</button>
    );
}

