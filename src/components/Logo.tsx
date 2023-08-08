import { Box, ResponsiveValue, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import logo from '../../public/logoQ.png';

const Logo = (props: { size: ResponsiveValue<string> | undefined }) => {
	const router = useRouter();
	return (
		<Box
			w="146"
			display="flex"
			alignItems="center"
			onClick={() => router.push('/')}
			cursor="pointer"
		>
			<Image src={logo} alt="logo" width={64} />

			<Text fontWeight="extrabold" fontSize={props.size} mt={2}>
				EcliptiQ
			</Text>
		</Box>
	);
};

export default Logo;
