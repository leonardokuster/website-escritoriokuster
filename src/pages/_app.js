import "../styles/globals.css";

import React from 'react';
import App from 'next/app';
import Loader from '../components/Loader';
import BackToTopButton from "../components/backToTop/backToTopButton";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Loader />
        <BackToTopButton />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;