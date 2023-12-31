import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import router from 'next/router';
import React from 'react';

import Routes from '@/Routes';

const Comp5 = () => {
	return (
		<Box
			w={{ base: '95%', md: '90%' }}
			borderRadius={{ base: '25px', md: '50px' }}
			mx="auto"
			mb={10}
			p={{ base: '10', md: '24' }}
			bg="green1"
		>
			<Flex
				display={{ base: 'stack', md: 'flex' }}
				alignItems="center"
				justifyContent="space-between"
			>
				<Text
					fontWeight="extrabold"
					textDecoration="underline"
					textDecorationColor="green_neon"
					textDecorationThickness="5px"
					fontSize="20px"
					color="green.400"
					display={{ base: 'block', md: 'none' }}
					mb={8}
				>
					Focus on what`s important
				</Text>
				<Box borderRadius="3xl" overflow="hidden">
					<video width="550" height="500" autoPlay loop muted>
						<source src="/com5-video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Box>

				<Stack w={{ md: '35%' }} gap={6} mt={{ base: 6, md: 0 }}>
					<Text
						fontWeight="extrabold"
						textDecoration="underline"
						textDecorationColor="green_neon"
						textDecorationThickness="5px"
						fontSize="20px"
						color="green.400"
						display={{ md: 'block', base: 'none' }}
					>
						Focus on what`s important
					</Text>
					<Heading fontSize={{ base: '4xl', md: '6xl' }}>
						Reach that mental clarity you`ve been longing for.
					</Heading>
					<Text>
						Your tasks are automatically sorted into Today, Upcoming, and custom
						Filter views to help you prioritize your most important work.
					</Text>
					<Text fontWeight="bold" color="green.400">
						Get it all done
					</Text>
					<Button
						variant="green"
						size="lg"
						onClick={() => router.push(Routes.REGISTER)}
					>
						Get Started
					</Button>
				</Stack>
			</Flex>
		</Box>
	);
};

export default Comp5;
