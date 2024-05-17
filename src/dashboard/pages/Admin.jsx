import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '../screens/home';
import Clients from '../screens/clients';
import Contact from '../screens/contact';
import Services from '../screens/services';
import Settings from '../screens/settings';

export default function Admin({ currentPage }) {
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
    }, [router]);

    return (
        <div>
          {currentPage === 'home' && <Home />}
          {currentPage === 'clients' && <Clients />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'services' && <Services />}
          {currentPage === 'settings' && <Settings />}
        </div>
    );
}