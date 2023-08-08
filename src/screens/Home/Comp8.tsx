import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { PiChatsCircleBold } from 'react-icons/pi';

const Comp8 = () => {
	return (
		<Flex
			w="90%"
			mx="auto"
			borderRadius="50px"
			mb={10}
			p={{ base: '10', md: '24' }}
			justifyContent="space-around"
		>
			<Stack w={{ md: '45%' }} gap={{ base: 5, md: 10 }}>
				<Box
					bg="blue.500"
					boxSize="16"
					borderRadius="2xl"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<PiChatsCircleBold color="white" fontSize="30px" />
				</Box>
				<Text fontWeight="bold" color="blue">
					#1 SUPPORT IN SOFTWARE
				</Text>
				<Heading fontSize={{ base: '4xl', md: '6xl' }}>
					24/7 real-time support.
				</Heading>
				<Stack display={{ md: 'none', base: 'block' }}>
					<Image
						src="/customer-support.avif"
						width={400}
						height={50}
						alt="image"
					/>
				</Stack>
				<Text>
					EcliptiQ has the highest rated client support in software. We`re here
					24 hours a day, every day of the week, including holidays.
				</Text>
				<Stack fontWeight="bold" fontSize="14px">
					<Flex alignItems="center">
						<BsFillPatchCheckFill color="blue" fontSize="20px" />
						<Text ml={2}>Email Support</Text>
					</Flex>
					<Flex alignItems="center">
						<BsFillPatchCheckFill color="blue" fontSize="20px" />
						<Text ml={2}>Frequent Webinars</Text>
					</Flex>
				</Stack>
			</Stack>
			<Stack display={{ base: 'none', md: 'block' }} boxSize="2xl" mb="-150px">
				<Image
					src="/customer-support.avif"
					width={800}
					height={700}
					alt="image"
				/>
			</Stack>
		</Flex>
	);
};

export default Comp8;
