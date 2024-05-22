import React, { useState, useEffect } from 'react';
import InProgress from './inProgress';

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
            {userType === 'admin' && <InProgress />}
            {userType === 'collaborator' && <InProgress />}
            {userType === 'user' && <InProgress />}
        </div>
    );
}