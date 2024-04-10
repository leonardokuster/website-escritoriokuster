import React from 'react';
import Head from "next/head";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Login from '../screens/Login';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Escritório Küster - Área do cliente</title>
        <meta name="description" content="Área de login para acessar o portal do cliente do escritório Küster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Login />
      <Footer />
    </>
  );
}
