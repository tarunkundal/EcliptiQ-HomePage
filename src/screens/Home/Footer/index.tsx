import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillTwitterCircle,
} from 'react-icons/ai';

import Logo from '@/components/Logo';

const Footer = () => {
	return (
		<Box
			bgGradient="linear-gradient(45deg,blue, #FF0bef,violet,  red)"
			px={{ sm: '4%', md: '10%' }}
			py={6}
		>
			<Stack color="white">
				<Flex fontWeight="black" justifyContent="space-around">
					<Flex alignItems="center">
						<Image src="/footer-wheel.svg" width={30} height={20} alt="badge" />
						<Text ml={2} fontSize="14px">
							Free training & 24-hours support
						</Text>
					</Flex>
					<Flex alignItems="center">
						<Image
							width={30}
							height={20}
							src="/footer-security_badge-white.svg"
							alt="badge2"
						/>
						<Text ml={2} fontSize="14px">
							Serious about security & privacy
						</Text>
					</Flex>
					<Flex alignItems="center">
						<Image
							width={30}
							height={20}
							src="/footer-uptime_badge-white.svg"
							alt="badg3"
						/>
						<Text ml={2} fontSize="14px">
							Highest levels of uptime the last 12 months
						</Text>
					</Flex>
				</Flex>
				<Flex
					mt={{ base: 6, md: 14 }}
					borderTop="1px"
					p={4}
					borderColor="pink2"
					alignItems="center"
					justifyContent="space-between"
				>
					<Stack gap={4}>
						<Logo size="md" />
						<Text fontSize={{ base: '12px', md: '14px' }} fontWeight="bold">
							© 2023 EcliptiQ | Security | Your Privacy | Terms
						</Text>
					</Stack>
					<Flex>
						<a style={{ color: 'white' }} href="https://www.linkedin.com">
							<AiFillLinkedin size="2rem" />
						</a>
						<a style={{ color: 'white' }} href="https://www.instagram.com">
							<AiFillInstagram size="2rem" />
						</a>
						<a style={{ color: 'white' }} href="https://www.facebook.com">
							<AiFillFacebook size="2rem" />
						</a>
						<a style={{ color: 'white' }} href="https://www.twitter.com">
							<AiFillTwitterCircle size="2rem" />
						</a>
					</Flex>
				</Flex>
				<Text textAlign="center" fontSize="14px">
					Designed By :{' '}
					<Text fontWeight="bold" as="span">
						Tarun Chauhan
					</Text>
				</Text>
			</Stack>
		</Box>
	);
};

export default Footer;
