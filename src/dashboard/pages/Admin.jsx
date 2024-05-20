import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header'; 
import Home from '../screens/home';
import Clients from '../screens/clients';
import Contact from '../screens/contact';
import Services from '../screens/services';
import Settings from '../screens/settings';

export default function Admin() {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

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

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header onPageChange={onPageChange} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'clients' && <Clients />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'services' && <Services />}
      {currentPage === 'settings' && <Settings />}
    </div>
  );
}
