import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Routes from '../../Routes';
import Logo from '../Logo';

const Header = () => {
	const router = useRouter();

	const [scrollBgColor, setScrollBgColor] = useState('transparent');

	const handleScroll = () => {
		const scrolled = window.scrollY;
		if (scrolled > 10) {
			setScrollBgColor('white');
		} else {
			setScrollBgColor('transparent');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Box
			boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
			py={4}
			px={{ base: 4, md: 24 }}
			top={0}
			left={0}
			position="fixed"
			w="full"
			bg={scrollBgColor}
			zIndex={1}
		>
			<Flex
				h={16}
				alignItems="center"
				justifyContent="space-between"
				w={{ base: 'full', md: '' }}
			>
				<HStack spacing={10} alignItems="center">
					<Logo size={{ base: 'lg', md: '2xl' }} />

					<Box
						as="a"
						mt={2}
						px={2}
						py={1}
						fontWeight="bold"
						fontSize="14px"
						rounded="md"
						_hover={{
							bg: 'violet2',
						}}
						color="red"
						display={{ base: 'none', md: 'block' }}
						cursor="pointer"
						onClick={() => router.push('/features')}
					>
						Features
					</Box>
				</HStack>
				<Flex alignItems="center" justifyContent="center">
					<Box
						mx={6}
						as="a"
						fontWeight="bold"
						fontSize="14px"
						rounded="md"
						_hover={{
							textDecoration: 'underline',
						}}
						color="red"
						display={{ base: 'block', md: 'none' }}
						cursor="pointer"
						onClick={() => router.push('/features')}
					>
						Features
					</Box>
					<Button
						size={{ base: 'sm', md: 'md' }}
						variant="blue"
						onClick={() => router.push(Routes.LOGIN)}
					>
						Sign In
					</Button>
					<Button
						display={{ base: 'none', md: 'block' }}
						_hover={{ bg: 'blue1', color: 'blue' }}
						onClick={() => router.push(Routes.REGISTER)}
						ml={4}
					>
						Sign Up
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Header;

/*

*/
