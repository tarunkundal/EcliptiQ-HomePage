import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import router from 'next/router';
import React from 'react';

import Routes from '@/Routes';

const Comp6 = () => {
	return (
		<Flex
			w="90%"
			mx="auto"
			borderRadius="50px"
			mb={10}
			p={{ base: '10', md: '24' }}
			bg="blue1"
			justifyContent="space-around"
		>
			<Stack w={{ md: '50%' }} gap={{ base: 4, md: 8 }}>
				<Text
					fontWeight="extrabold"
					textDecoration="underline"
					textDecorationColor="blue_neon"
					textDecorationThickness="5px"
					fontSize="20px"
					color="blue.400"
				>
					Focus on what`s important
				</Text>
				<Heading fontSize={{ base: '4xl', md: '6xl' }}>
					A task manager you can trust for life
				</Heading>
				<Text>
					We’ve been building EcliptiQ for 1 years and 187 days. Rest assured
					that we’ll never sell out to the highest bidder.
				</Text>
				<Stack display={{ base: 'block', md: 'none' }}>
					<Image src="/task-project-com6.svg" width={500} height={500} alt="" />
				</Stack>
				<Text>
					Your tasks are automatically sorted into Today, Upcoming, and custom
					Filter views to help you prioritize your most important work.
				</Text>
				<Button
					variant="blue"
					size="lg"
					onClick={() => router.push(Routes.REGISTER)}
				>
					Get Started
				</Button>
			</Stack>
			<Stack display={{ base: 'none', md: 'block' }}>
				<Image src="/task-project-com6.svg" width={500} height={500} alt="" />
			</Stack>
		</Flex>
	);
};

export default Comp6;
