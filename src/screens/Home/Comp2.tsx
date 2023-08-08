import { Flex, Stack, Text } from '@chakra-ui/react';
import { Image as ChakraImage } from '@chakra-ui/react';
import React from 'react';

const Comp2 = () => {
	return (
		<Stack mx={{ md: 14 }} gap={{ sm: 10, md: 14 }} my={14} p={4}>
			<Text align="center" fontWeight="bold" fontSize="14px">
				JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS
			</Text>
			<Flex justifyContent="space-around">
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/booking_com.svg"
					alt="booking.com"
				/>
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/ibm.svg"
					alt="ibm"
				/>
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/logitech.svg"
					alt="logitech"
				/>
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/fortinet.svg"
					alt="fortinet"
				/>
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/tibco.svg"
					alt="tibco"
				/>
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/spotify.svg"
					alt="spotify"
				/>
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/t-mobile.svg"
					alt="t-mobile"
				/>
				<ChakraImage
					width={{ sm: 50, md: 90 }}
					height={{ sm: 5, md: 70 }}
					src="/netflix.svg"
					alt="netflix"
				/>
			</Flex>
		</Stack>
	);
};

export default Comp2;
