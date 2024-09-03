import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export default function Logo() {
	return (
		<Link
			className='flex items-end'
			href={'/'}
		>
			<Image
				className='mb-1'
				width={25.6}
				height={28}
				src={'/icon.svg'}
				alt='logo'
			/>
			<Image
				className='ml-3'
				width={115.19}
				height={29.58}
				src={'/logo.svg'}
				alt='logo'
			/>
		</Link>
	);
}
