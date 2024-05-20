import React, { useState } from 'react';
import Home from '../screens/home';
import Clients from '../screens/clients';
import Contact from '../screens/contact';
import Services from '../screens/services';
import Settings from '../screens/settings';
import NotFound from '../screens/notFound';
import Header from './Header';

export default function Main() {
  const [currentPage, setCurrentPage] = useState('/');

  const renderComponent = () => {
    switch (currentPage) {
      case '/homeDashboard':
        return <Home />;
      case '/clientsDashboard':
        return <Clients />;
      case '/contactDashboard':
        return <Contact />;
      case '/servicesDashboard':
        return <Services />;
      case '/settings':
        return <Settings />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      <Header onPageChange={setCurrentPage} />
      <main>
        {renderComponent()}
      </main>
    </div>
  );
}