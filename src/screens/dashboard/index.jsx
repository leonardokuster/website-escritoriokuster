import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminDashboard from './AdminDashboard';
import CollaboratorDashboard from './CollaboratorDashboard';
import UserDashboard from './UserDashboard';

export default function Dashboard() {
    const router = useRouter();
    const [userType, setUserType] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); 
            return;
        }

        const storedUserType = localStorage.getItem('tipo');
        const storedUserName = localStorage.getItem('nome');
        if (!storedUserType || !storedUserName) {
            router.push('/login'); 
            return;
        }

        setUserType(storedUserType);
        setUserName(storedUserName);
    }, []);

    return (
        <div>
            {userType === 'admin' && (
                <AdminDashboard />
            )}
            {userType === 'collaborator' && (
                <CollaboratorDashboard />
            )}
            {userType === 'user' && (
                <UserDashboard />
            )}
        </div>
    );
}