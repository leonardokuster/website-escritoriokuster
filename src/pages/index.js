import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../screens/Home';


export default function IndexPage() {
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
        <title>Escritório Küster - Sua jornada contábil começa aqui</title>
        <meta name="description" content="Seja bem-vindo ao escritório Küster, onde a excelência é mais do que um serviço, é uma promessa. Oferecemos soluções contábeis para impulsionar o seu negócio. Confira nossos serviços de abertura de empresa, assessoria trabalhista, encerramento de empresa, escrituração contábil e tributária, obrigações acessórias e planejamento estratégico. Otimize sua gestão empresarial conosco." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <Footer />
    </>
  );
}