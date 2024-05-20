import React from 'react';
import Head from "next/head";
import DashboardPage from '../dashboard/pages/DashboardPage';

export default function Dashboard() {
  
  return (
    <>
      <Head>
        <title>Escritório Küster - Dashboard</title>
        <meta name="description" content="Dashboard da plataforma do Escritório Küster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardPage />
    </>
  );
}