import { Flex, Stack, Text } from '@chakra-ui/react';
import { Image as ChakraImage } from '@chakra-ui/react';
import React from 'react';

const Comp2 = () => {
	return (
		<Stack mx={{ base: 2, md: 14 }} gap={{ base: 8, md: 14 }} my={14} p={4}>
			<Text align="center" fontWeight="bold" fontSize="14px">
				JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
			</Text>
			<Flex
				justifyContent="space-around"
				display={{ base: 'inline-grid', md: 'flex' }}
				alignItems="center"
			>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					m={2}
					src="/booking_com.svg"
					alt="booking.com"
				/>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					src="/ibm.svg"
					alt="ibm"
					m={2}
				/>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					src="/logitech.svg"
					alt="logitech"
					m={2}
				/>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					src="/fortinet.svg"
					alt="fortinet"
					m={2}
				/>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					src="/tibco.svg"
					alt="tibco"
					m={2}
				/>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					src="/spotify.svg"
					alt="spotify"
					m={2}
				/>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					src="/t-mobile.svg"
					alt="t-mobile"
					m={2}
				/>
				<ChakraImage
					w={90}
					height={{ base: 5, md: 70 }}
					src="/netflix.svg"
					alt="netflix"
					m={2}
				/>
			</Flex>
		</Stack>
	);
};

export default Comp2;
