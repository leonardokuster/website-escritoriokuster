import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Contact from '../screens/Contact';

export default function ContactPage() {
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
        <title>Escritório Küster - Contato</title>
        <meta name="description" content="Entre em contato conosco preenchendo o formulário abaixo. Estamos prontos para atendê-lo e esclarecer suas dúvidas sobre nossos serviços. Você também pode nos contatar pelos números de telefone (51) 3056-4216 ou (51) 99994-7374, ou pelo email atendimento@escritoriokuster.com.br. Estamos localizados na Rua Sete de Setembro, 980 - Centro, Santa Cruz do Sul/RS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}
