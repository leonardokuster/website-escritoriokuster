import React from 'react';
import Head from "next/head";
import LoginHeader from '../components/login/template/loginHeader';
import LoginFooter from '../components/login/template/loginFooter';
import Dashboard from '../screens/dashboard/index';

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Escritório Küster - Dashboard</title>
        <meta name="description" content="Dashboard da plataforma do Escritório Küster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginHeader />
      <Dashboard />
      <LoginFooter />
    </>
  );
}



