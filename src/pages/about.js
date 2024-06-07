import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import About from '../screens/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4CQLGTWT49"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4CQLGTWT49');
            `,
          }}
        />
        <title>Escritório Küster - Sobre Nós</title>
        <meta name="description" content="Descubra a história por trás do Escritório Küster, fundado em 1986 pelo contador Lauro Roque Küster. Conheça sua jornada desde os primeiros passos como servente de pedreiro até a consolidação como um escritório contábil de referência na cidade de Santa Cruz do Sul/RS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Footer />
    </>
  );
}
