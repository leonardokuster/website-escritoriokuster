import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Services from '../screens/Services';

export default function ServicesPage() {
  return (
    <>
      <Head>
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
