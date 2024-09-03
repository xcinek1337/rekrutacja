import Logo from '@/components/Header/Logo';
import Navigation from '@/components/Header/Navigation';
import React from 'react';

export default function Header() {
	return (
		<header className='relative px-4 lg:px-0 max-w-[1200px] lg:mx-auto'>
			<nav className='py-4  flex items-center justify-between gap-2.5 '>
				<Logo />

				<Navigation />
				<button className='hidden md:flex btn btn-blue'>Zadzwoń do nas</button>

				<svg className='md:hidden'
					viewBox='0 0 100 80'
					width='50'
					height='30'
				>
					<rect
						width='100'
						height='15'
					></rect>
					<rect
						y='30'
						width='100'
						height='15'
					></rect>
					<rect
						y='60'
						width='100'
						height='15'
					></rect>
				</svg>
			</nav>
		</header>
	);
}

