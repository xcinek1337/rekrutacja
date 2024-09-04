import { Bebas_Neue, Roboto_Condensed, Roboto_Flex } from 'next/font/google';

export const robotoFlex = Roboto_Flex({
	subsets: ['latin'],
	weight: ['400', '600'],
	display: 'swap',
	variable: '--roboto-flex'
});

export const bebas = Bebas_Neue({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
	variable: '--bebas-neue'
});
export const roboto_con = Roboto_Condensed({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
	variable: '--roboto-condensed',
});
