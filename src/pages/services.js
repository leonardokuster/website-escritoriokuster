import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Services from '../screens/Services';

export default function ServicesPage() {
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
        <title>Escritório Küster - Serviços prestados</title>
        <meta name="description" content="Descubra as soluções contábeis e empresariais oferecidas pelo Escritório Küster, incluindo abertura e encerramento de empresas, assessoria trabalhista e planejamento estratégico. Conte com nossa experiência para lidar com obrigações legais e fiscais. Solicite um orçamento hoje mesmo!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Services />
      <Footer />
    </>
  );
}
