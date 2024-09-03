import { bebas, roboto_con } from '@/utils/fonts';
import Image from 'next/image';
import React from 'react';

export default function SiteMap() {
	return (
		<section className='px-4 lg:px-0 text-white bg-primaryBlack'>
			<div className='py-[88px] max-w-[1200px] mx-auto w-full flex flex-col md:flex-row gap-12 justify-between'>
				<article className='flex text-left flex-col items-start gap-4'>
					<span className={`text-[25px] tracking-[-0.03em] ${bebas.className} `}>
						Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
					</span>
					<span className={`${roboto_con.className} text-sm`}>
						Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare,
						diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
					</span>
					<button className={`${roboto_con.className} flex gap-1.5 text-sm border-b-[1.5px] border-white pb-1.5 `}>
						Rozwiń
						<Image
							className='mt-0.5'
							src={'/arrow.png'}
							alt='arrow'
							width={12.73}
							height={14.62}
						/>
					</button>
				</article>

				<article className='flex flex-col items-start gap-4'>
					<span className={`text-[25px] tracking-[-0.03em] ${bebas.className} `}>
						Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
					</span>
					<span className={`${roboto_con.className} text-sm`}>
						Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare,
						diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
					</span>
					<button className={`${roboto_con.className} flex gap-1.5 text-sm border-b-[1.5px] border-white pb-1.5 `}>
						Rozwiń
						<Image
							className='mt-0.5'
							src={'/arrow.png'}
							alt='arrow'
							width={12.73}
							height={14.62}
						/>
					</button>
				</article>
			</div>
		</section>
	);
}
