import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Budget from '../screens/Budget';

export default function BudgetPage() {
  return (
    <>
      <Head>
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
