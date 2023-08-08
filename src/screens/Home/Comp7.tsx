import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const Comp7 = () => {
	return (
		<Stack
			w={{ base: '85%', md: '70%' }}
			mx="auto"
			textAlign="center"
			my={4}
			gap={8}
			bg="yellow1"
			p={8}
			borderRadius="10px 100px"
		>
			<Heading fontSize={{ base: '2xl', md: '6xl' }} color="yellow_neon">
				“EcliptiQ makes it easy to go as simple or as complex as you want”
			</Heading>
			<Heading fontSize="20px" fontStyle="oblique">
				- The Chauhan
			</Heading>
		</Stack>
	);
};

export default Comp7;
