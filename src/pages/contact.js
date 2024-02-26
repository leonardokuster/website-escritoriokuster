import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Contact from '../screens/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
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
