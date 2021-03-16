import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme/index';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alura Viagens</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Pattaya&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
