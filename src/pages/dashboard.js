import React from 'react';
import { useState, useEffect } from 'react';
import Head from "next/head";
import Dashboard from '../dashboard/pages/Dashboard';

export default function DashboardPage() {
  
  return (
    <>
      <Head>
        <title>Escritório Küster - Dashboard</title>
        <meta name="description" content="Dashboard da plataforma do Escritório Küster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}



