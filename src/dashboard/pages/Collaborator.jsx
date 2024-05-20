import React from 'react';
import { useState, useEffect } from 'react';

export default function Collaborator() {
    const [fullName, setFullName] = useState('');

    useEffect(() => {
        const storedFullName = localStorage.getItem('nome');
        if (storedFullName) {
            setFullName(storedFullName);
        }
    }, []);

    const firstName = fullName.split(' ')[0];

    return (
        <div>
            <h1>Bem-vindo, {firstName}!</h1>
            
            <p>Você é um colaborador!</p>
        </div>
    );
}
