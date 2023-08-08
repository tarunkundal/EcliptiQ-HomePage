import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '@/styles/Theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
