import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';

import Routes from '@/Routes';

const Comp1 = () => {
	const router = useRouter();
	return (
		<Box
			py={10}
			bgGradient="linear-gradient(45deg,rgb(228,248,242),rgb(240,251,248),rgb(255,250,230), rgb(248,247,254),rgb(237,250,254))"
		>
			<Flex
				mt={{ base: '15%', md: '8%' }}
				px={{ base: 4, md: 18 }}
				justifyContent="space-around"
				alignItems="center"
			>
				<Stack display={{ base: 'none', md: 'block' }}>
					<Box borderRadius="2xl" overflow="hidden">
						<video width="560" height="505" autoPlay loop muted>
							<source src="/header-graphic-com1-video.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</Box>
				</Stack>
				<Stack gap={{ base: 5, md: 8 }} w={{ base: '90%', md: '40%' }}>
					<Heading fontSize={{ base: '5xl', md: '6xl' }}>
						One app to replace them all.
					</Heading>
					<Text fontWeight="bold">All your work in one place</Text>
					<Stack display={{ base: 'block', md: 'none' }}>
						<Box borderRadius="2xl" overflow="hidden">
							<video width="560" height="505" autoPlay loop muted>
								<source src="/header-graphic-com1-video.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</Box>
					</Stack>

					<Flex
						w={{ base: '80%', md: '50%' }}
						alignItems="center"
						justifyContent="space-around"
						m={{ base: 'auto', md: '0' }}
					>
						<Button variant="blue" onClick={() => router.push(Routes.REGISTER)}>
							Get Started
						</Button>
						<Text fontWeight="bold">FREE FOREVER</Text>
					</Flex>
					<Flex
						w={{ md: '60%' }}
						mt={2}
						alignItems="center"
						justifyContent="space-around"
					>
						<BsStarFill color="gold" />
						<BsStarFill color="gold" />
						<BsStarFill color="gold" />
						<BsStarFill color="gold" />
						<BsStarFill color="gold" />
						<Text fontWeight="bold">Based on 10,000+ reviews on</Text>
					</Flex>
				</Stack>
			</Flex>
		</Box>
	);
};

export default Comp1;
