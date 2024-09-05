import React from 'react';
import Home from '../screens/home';
import Clients from '../screens/clients';
import Contact from '../screens/gerenciamento';
import Services from '../screens/services';
import Settings from '../screens/settings';
import NotFound from '../screens/notFound';

export default function Main({ currentPage }) {
  return (
    <main style={{ minHeight: '72vh' }}>
        {currentPage === 'home' && <Home />}
        {currentPage === 'clients' && <Clients />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'settings' && <Settings />}
        {!['home', 'clients', 'contact', 'services', 'settings'].includes(currentPage) && <NotFound />}
    </main>
  );
}