import { bebas, roboto_con } from '@/utils/fonts';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
	return (
		<main className='px-4 lg:px-0 relative border-[0.1px] border-transparent max-w-[1440px] min-h-[700px] md:min-h-[825px] w-full mx-auto'>
			<Image
				className='absolute w-[253px] h-[613px] -z-20 top-[-79px] right-[30px] md:w-[668.05px] md:h-[659px] md:right-[71.95px]'
				src={'/Element.png'}
				alt='element'
				width={668.05}
				height={659}
			/>

			<div className='z-2 max-w-[1200px] mx-auto'>
				<div className='flex flex-col gap-12 mt-[120px]'>
					<h1 className={`${bebas.className} text-5xl md:text-[76.29px] tracking-[-0.04em] md:leading-[83.92px]`}>
						SPRZEDAJEMY SAMOCHODY<br></br>Z EUROPY
					</h1>
					<p className={`${roboto_con.className} leading-6`}>
						Kup komfortowy pojazd, aby każda podróż<br></br>była wyjątkowym przeżyciem.
					</p>
					<div className='flex gap-6'>
						<button className='btn btn-blue hover:bg-blue-800'>Zobacz Zdjęcia</button>
						<button className='btn btn-transparent hover:text-primaryWhite hover:bg-blue-800'>Zadzwoń do nas</button>
					</div>
				</div>
			</div>

			<Image
				className='absolute -z-10 right-0 bottom-[92.63px]'
				src={'/Hero.png'}
				width={1064}
				height={404.37}
				alt='cars'
			/>

			<Image
				className='absolute -z-10 right-0 bottom-[92.63px] opacity-70'
				src={'/cien.png'}
				width={1064}
				height={404.37}
				alt='cars'
			/>
		</main>
	);
}
