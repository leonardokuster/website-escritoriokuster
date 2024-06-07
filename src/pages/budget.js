import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Budget from '../screens/Budget';

export default function BudgetPage() {
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

              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5016243,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        <title>Escritório Küster - Solicite seu orçamento!</title>
        <meta name="description" content="Solicite agora seu orçamento conosco! Preencha o formulário com seu nome, telefone, e-mail e mensagem. Estamos prontos para atendê-lo e oferecer soluções personalizadas para o seu negócio. Além disso, você pode entrar em contato conosco pelo WhatsApp ou conhecer todos os nossos serviços disponíveis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Budget />
      <Footer />
    </>
  );
}
