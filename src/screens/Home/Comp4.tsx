import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import router from 'next/router';
import React from 'react';

import Routes from '@/Routes';

const Comp4 = () => {
	return (
		<Box
			w={{ base: '95%', md: '90%' }}
			borderRadius={{ base: '25px', md: '50px' }}
			mx="auto"
			mb={10}
			p={{ base: '10', md: '24' }}
			bg="violet1"
		>
			<Stack
				w={{ md: '70%' }}
				mx="auto"
				textAlign="center"
				gap={{ base: 4, md: 6 }}
			>
				<Text
					fontWeight="bold"
					color="pink_neon"
					fontSize="20px"
					textDecoration="underline"
					textDecorationColor="pink"
					textDecorationThickness="5px"
				>
					Clear your mind
				</Text>
				<Heading fontSize={{ base: '4xl', md: '6xl' }}>
					The fastest way to get tasks out of your head.
				</Heading>

				<Box borderRadius="3xl" overflow="hidden" mx="auto">
					<video width="600" height="515" autoPlay loop muted>
						<source src="/projects_tasks-com4-video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Box>

				<Text>
					Type just about anything into the task field and Task-Management
					one-of-its-kind natural language recognition will instantly fill your
					to-do list.
				</Text>
				<Button
					variant="pink"
					w="full"
					mt={4}
					size="lg"
					onClick={() => router.push(Routes.REGISTER)}
				>
					GET STARTED
				</Button>
			</Stack>
		</Box>
	);
};

export default Comp4;
