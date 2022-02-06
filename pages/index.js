import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Generator motywów Margonem</title>
        <meta
          name='description'
          content='Generator kodu motywu do gry przeglądarkowej margonem.pl'
        ></meta>
      </Head>
      <Header />
      <Container />
    </>
  );
}
