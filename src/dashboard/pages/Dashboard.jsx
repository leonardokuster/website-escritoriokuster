import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Admin from './Admin';
import Collaborator from './Collaborator';
import User from './User';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Dashboard() {
    const router = useRouter();
    const [userType, setUserType] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); 
            return;
        }

        const storedUserType = localStorage.getItem('tipo');
        if (!storedUserType) {
            router.push('/login'); 
            return;
        }
        setUserType(storedUserType);
    }, []);

    return (
        <div>
            <Header />
            {userType === 'admin' && (
                <Admin />
            )}
            {userType === 'collaborator' && (
                <Collaborator />
            )}
            {userType === 'user' && (
                <User />
            )}
            <Footer />
        </div>
    );
}