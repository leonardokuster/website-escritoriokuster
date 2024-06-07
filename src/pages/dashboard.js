import React from 'react';
import Head from "next/head";
import DashboardPage from '../dashboard/pages/DashboardPage';

export default function Dashboard() {
  
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MB6KRGCB');
            `,
          }}
        />
        <title>Escritório Küster - Dashboard</title>
        <meta name="description" content="Dashboard da plataforma do Escritório Küster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardPage />
    </>
  );
}