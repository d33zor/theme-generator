import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

export default function Home() {
  const cache = createCache({
    key: 'css',
    prepend: true,
  });

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Generator motywów Margonem</title>
        <meta
          name='description'
          content='Generator kodu motywu do gry przeglądarkowej margonem.pl'
        ></meta>
      </Head>
      <Header />
      <Container />
    </CacheProvider>
  );
}
