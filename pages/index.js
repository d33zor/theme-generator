import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>Generator motywów Margonem</title>
			</Head>
			<Header />
			<Container />
		</>
	);
}
