import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Services from '../screens/Services';

export default function ServicesPage() {
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