import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { Image as ChakraImage } from '@chakra-ui/react';
import Head from 'next/head';
import router from 'next/router';
import React from 'react';

import Routes from '@/Routes';
import Footer from '@/screens/Home/Footer';

import Header from '../src/components/Header';

const Features = () => {
	return (
		<>
			<Head>
				<title>EcliptiQ</title>
			</Head>
			<Header />
			<Stack
				textAlign="center"
				px={{ base: '8%', md: '10%' }}
				pt={{ base: '30%', md: '15%' }}
			>
				<Heading
					fontSize={{ base: '5xl', md: '7xl' }}
					w={{ base: '100%', md: '50%' }}
					m="auto"
				>
					From overwhelmed to on top of it
				</Heading>
				<Text
					fontSize="22px"
					w={{ md: '45%' }}
					m="auto"
					mt={8}
					fontWeight="medium"
				>
					EcliptiQ gives you the confidence that everything’s organized and
					accounted for, so you can make progress on the things that are
					important to you.
				</Text>

				<ChakraImage
					mt="-20%"
					src="/features-hero-img.webp"
					alt="feature"
					zIndex={-2}
				/>
				<Stack
					w={{ base: '60%', md: '40%' }}
					fontSize={{ base: '22px', md: '25px' }}
					bg="blue1"
					m="auto"
					borderRadius="12% 29% / 25% 10%"
					p={4}
				>
					<Text fontStyle="italic">
						“EcliptiQ gives me the peace of mind knowing I am doing exactly what
						I need to do, exactly when I need to do it.”
					</Text>
					<Text fontSize="20px">– Ashley W.</Text>
				</Stack>
				<Stack
					textAlign="left"
					w={{ base: '70%', md: '30%' }}
					ml={{ md: '10%' }}
					mt={{
						base: '15%',
						md: '20%',
					}}
					mb={{ md: '-20%' }}
					gap={6}
				>
					<Heading fontSize={{ base: '4xl', md: '6xl' }}>
						Personalize your task views
					</Heading>
					<Text fontSize={{ base: '20px', md: '25px' }}>
						Build your own task views to fit your unique style and workflow.
					</Text>
				</Stack>
				<Flex alignItems="center" mt={{ md: '-20%' }}>
					<ChakraImage src="/features2-img.webp" alt="side img" zIndex={-2} />
					<ChakraImage
						w={{ base: '200px', md: '600px' }}
						h={{ md: '500px' }}
						ml={{ base: '-60%', md: '-50%' }}
						alt=""
						src="/featues3-img.webp"
					/>
				</Flex>
				<Stack
					w={{ base: '60%', md: '40%' }}
					fontSize={{ base: '22px', md: '25px' }}
					bg="violet1"
					m="auto"
					borderRadius="13% 60% 33% / 25% 67% 10%"
					p={4}
					mt={8}
				>
					<Text fontStyle="italic">
						“With a combo of labels and filters I`m finally able to sleep easy
						at night knowing everything is covered!”
					</Text>
					<Text fontSize="20px">– Jenny S.</Text>
				</Stack>
				<Stack mt={8}>
					<Heading fontSize={{ base: '4xl', md: '7xl' }}>
						Millions of people rely on EcliptiQ
					</Heading>
					<Text fontWeight="bold" fontSize={{ md: '30px' }}>
						for sanity and structure at work and at home
					</Text>
					<Button
						variant="blue"
						size="lg"
						w={{ base: '80%', md: '40%' }}
						m="auto"
						my={10}
						onClick={() => router.push(Routes.REGISTER)}
					>
						Get Started
					</Button>
					<ChakraImage src="/features4-all-in-one.avif" alt="img" />
				</Stack>
			</Stack>
			<Footer />
		</>
	);
};

export default Features;
