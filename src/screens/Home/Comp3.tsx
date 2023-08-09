/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import router from 'next/router';
import React from 'react';

import Routes from '@/Routes';

const Comp3 = () => {
	return (
		<Box
			w={{ base: '95%', md: '90%' }}
			borderRadius={{ base: '25px', md: '50px' }}
			mx="auto"
			mb={10}
			p={{ base: '10', md: '24' }}
			bg="pink1"
		>
			<Flex
				alignItems="center"
				display={{ base: 'block', md: 'flex' }}
				justifyContent="space-between"
			>
				<Stack w={{ base: '100%', md: '50%' }} gap={{ base: 4, md: 6 }}>
					<Text
						fontWeight="extrabold"
						textDecoration="underline"
						textDecorationColor="pink_neon"
						textDecorationThickness="5px"
					>
						Project & Tasks
					</Text>
					<Heading fontSize={{ base: '4xl', md: '6xl' }}>
						Simplify work and get more done.
					</Heading>
					<Text>
						Plan, track, and manage any type of work with EcliptiQ that flexes
						to your team's needs.
					</Text>
					<Text fontWeight="bold">REPLACES: Asana | Monday | Jira</Text>
					<Button
						w={{ md: '50%' }}
						variant="red"
						onClick={() => router.push(Routes.REGISTER)}
					>
						Get Started
					</Button>
				</Stack>
				<Box
					display={{ base: 'none', md: 'block' }}
					boxSize="fit-content"
					borderRadius="3xl"
					overflow="hidden"
				>
					<video width="450" height="500" autoPlay loop muted>
						<source src="/projects_tasks-com4-video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</Box>
			</Flex>
		</Box>
	);
};

export default Comp3;
