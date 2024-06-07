import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../screens/Home';


export default function IndexPage() {
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