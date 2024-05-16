import React from 'react';
import { useState, useEffect } from 'react';

const AdminDashboard = () => {
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
            
            <p>Você é um administrador!</p>
        </div>
    );
};

export default AdminDashboard;
