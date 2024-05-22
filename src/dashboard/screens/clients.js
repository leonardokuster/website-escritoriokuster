import React, { useState, useEffect } from 'react';
import UsuariosTable from '../tables/tabelaUsuarios';
import NotFound from './notFound';

export default function Services() {
    const [userType, setUserType] = useState('');

    useEffect(() => {
        const storedUserType = localStorage.getItem('tipo');
        if (storedUserType) {
          setUserType(storedUserType);
        }
    }, []);
    console.log(userType);

    return (
        <div>
            {userType === 'admin' && <UsuariosTable />}
            {userType === 'collaborator' && <UsuariosTable />}
            {userType === 'user' && <NotFound />}
        </div>
    );
}