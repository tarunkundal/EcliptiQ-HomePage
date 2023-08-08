import Head from 'next/head';
import React from 'react';

import Home from '@/screens/Home';

import Header from '../src/components/Header';

const App = () => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" />
				<title>EcliptiQ</title>
				<meta
					name="descripition"
					content="EcliptiQ could be interpreted as a project or platform that aims to bring innovation and intelligence to a global scale"
				/>
			</Head>
			<Header />
			<Home />
		</>
	);
};
export default App;
