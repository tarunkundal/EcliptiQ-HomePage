import {
	Box,
	Button,
	Flex,
	HStack,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import Routes from '../../Routes';
import Logo from '../Logo';

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
				<Button
					display={{ md: 'none' }}
					variant={isOpen ? 'red' : ''}
					onClick={isOpen ? onClose : onOpen}
				>
					{isOpen ? (
						<Box
							transition="ease-in-out .7s "
							_hover={{ transform: 'rotate(180deg)' }}
						>
							<AiOutlineClose />
						</Box>
					) : (
						<GiHamburgerMenu />
					)}
				</Button>

				<HStack spacing={10} alignItems="center">
					<Logo size="2xl" />

					<Box
						as="a"
						mt={2}
						px={2}
						py={1}
						fontWeight="bold"
						fontSize="14px"
						rounded="md"
						_hover={{
							textDecoration: 'none',
							bg: 'blue1',
						}}
						display={{ base: 'none', md: 'block' }}
						cursor="pointer"
						onClick={() => router.push('/features')}
					>
						Features
					</Box>
				</HStack>
				<Flex alignItems="center">
					<Stack direction="row" spacing={6}>
						<Button variant="blue" onClick={() => router.push(Routes.LOGIN)}>
							Sign In
						</Button>
						<Button
							display={{ base: 'none', md: 'inline-flex' }}
							_hover={{ bg: 'blue1' }}
							onClick={() => router.push(Routes.REGISTER)}
						>
							Sign Up
						</Button>
					</Stack>
				</Flex>
			</Flex>

			{isOpen ? (
				<Box display={{ md: 'none' }}>
					<Stack as="nav" spacing={6}>
						<Box
							as="a"
							mt={2}
							px={2}
							py={1}
							fontWeight="bold"
							fontSize="14px"
							rounded="md"
							_hover={{
								textDecoration: 'none',
								bg: 'blue1',
							}}
							boxSizing="content-box"
							cursor="pointer"
							onClick={() => router.push('/features')}
						>
							Features
						</Box>
					</Stack>
				</Box>
			) : null}
		</Box>
	);
};

export default Header;

/*

*/
