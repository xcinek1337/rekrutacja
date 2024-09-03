import { robotoFlex } from '@/utils/fonts';
import Link from 'next/link';
import React from 'react';

const pages = [' Galeria zdjęć', 'FaQ'];
export default function Navigation() {
	return (
		<ul className='hidden md:flex items-center gap-6'>
			{pages.map((page) => {
				return (
					<li key={page}>
						<Link
							className={`${robotoFlex.className} relative group`}
							href={'/'}
						>
							{page}
							<span className='absolute -bottom-1 left-0 w-0 transition-a-all duration-300 h-0.5 bg-primaryBlue group-hover:w-full'></span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
