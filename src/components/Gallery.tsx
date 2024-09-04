import Slider from '@/components/Slider';
import React from 'react';

export default function Gallery() {
	return (
		<section className='px-4 lg:px-0 max-w-[1200px] mx-auto w-full'>
			<div className='mt-20 flex flex-col gap-6'>
				<div>
					<h3 className={`font-robotoCondensed text-[21.5px] text-primaryBlue leading-[32.25px]`}>Prezentacja Firmy</h3>
					<div>
						<p className={`font-bebasNeue text-[40px]`}>ZOBACZ NASZĄ GALERIĘ ZDJĘĆ</p>
					</div>
				</div>
				<div className='flex gap-12 '>
					<button
						className={`font-robotoFlex text-[15px] border-b-[1px] border-primaryBlue text-primaryBlue tracking-[-0.02em] `}
					>
						Samochody osobowe
					</button>
					<button className={`font-robotoFlex text-[15px] text-black tracking-[-0.02em] group relative w-max`}>
						Samochody dostawcze
						<span className='hover_border-b'></span>
					</button>
				</div>
			</div>

			<aside className='max-w-[1200px] mx-auto w-full'>
				<Slider />
			</aside>
		</section>
	);
}
