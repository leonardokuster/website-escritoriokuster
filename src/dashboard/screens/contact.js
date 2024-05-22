import React, { useState, useEffect } from 'react';
import InProgress from './inProgress';
import ContatosTable from '../tables/tabelaContato';

export default function Services() {
    const [userType, setUserType] = useState('');

    useEffect(() => {
        const storedUserType = localStorage.getItem('tipo');
        if (storedUserType) {
          setUserType(storedUserType);
        }
      }, []);

    return (
        <div>
            {userType === 'admin' && <ContatosTable />}
            {userType === 'collaborator' && <ContatosTable />}
            {userType === 'user' && <InProgress />}
        </div>
    );
}