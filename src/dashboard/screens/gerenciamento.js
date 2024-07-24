import React, { useState, useEffect } from 'react';
import GerenciamentoUsuarios from '../pages/GerenciamentoUsuarios';

export default function Gerenciamento() {
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
            {userType === 'user' && <GerenciamentoUsuarios />}
        </div>
    );
}