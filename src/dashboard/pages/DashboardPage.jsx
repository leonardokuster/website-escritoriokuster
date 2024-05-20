import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function DashboardPage() {
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
    <>
      <Header onPageChange={onPageChange} />
      <Main currentPage={currentPage} />
      <Footer />
    </>
  );
}