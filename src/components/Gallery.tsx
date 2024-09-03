import Slider from '@/components/Slider';
import { bebas, roboto_con, robotoFlex } from '@/utils/fonts';
import React from 'react';

export default function Gallery() {
	return (
		<>
			<section className='px-4 lg:px-0 max-w-[1200px] mx-auto w-full'>
				<div className='mt-20 flex flex-col gap-6'>
					<div>
						<span className={`${roboto_con.className} text-[21.5px] text-primaryBlue leading-[32.25px]`}>
							Prezentacja Firmy
						</span>
						<div>
							<span className={`${bebas.className} text-[40px]`}>ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</span>
						</div>
					</div>
					<div className='flex gap-12 '>
						<button className={`${robotoFlex.className} text-[15px] text-primaryBlue tracking-[-0.02em] group relative w-max`}>
							Samochody osobowe
							<span className='absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-primaryBlue group-hover:w-full'></span>
						</button>
						<button className={`${robotoFlex.className} text-[15px] text-black tracking-[-0.02em] group relative w-max`}>
							Samochody dostawcze
							<span className='absolute -bottom-1 left-0 w-0 transition-a-all duration-300 h-0.5 bg-primaryBlue group-hover:w-full'></span>
						</button>
					</div>
				</div>
			</section>

			<div className='max-w-[1200px] mx-auto w-full'>
				<Slider />
			</div>
		</>
	);
}
