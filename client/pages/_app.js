import Head from 'next/head';
import React from 'react';
import './style.css';


// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Code Challenge</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;