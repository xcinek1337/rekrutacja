import { roboto_con } from '@/utils/fonts';
import React from 'react';

export default function Footer() {
	return (
		<footer className='px-4 lg:px-0 text-white  border-t-[1px]  border-white bg-primaryBlack'>
			<div className={`max-w-[1200px] py-6 mx-auto flex justify-between ${roboto_con.className}`}>
				<button className='font-bold'>Cars Spot</button>
				<button className='font-normal underline-offset-1 underline'>Polityka Prywatnośći</button>
			</div>
		</footer>
	);
}
