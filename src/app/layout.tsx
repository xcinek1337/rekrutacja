import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Zadanie rekrutacyjne',
	description: 'i did my best',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} bg-primaryWhite text-primaryBlack`}>
				<Header />
				<main> {children}</main>
				<Footer />
			</body>
		</html>
	);
}
