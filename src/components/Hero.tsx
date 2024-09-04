import Image from 'next/image';

export default function Hero() {
	return (
		<article className='px-4 lg:px-0 relative border-[0.1px] border-transparent max-w-[1440px] min-h-[700px] md:min-h-[825px] w-full mx-auto'>
			<Image
				className='absolute w-[253px] h-[613px] -z-20 top-[-79px] right-[30px] md:w-[668.05px] md:h-[659px] md:right-[71.95px]'
				src={'/Element.png'}
				alt='element'
				width={668.05}
				height={659}
			/>

			<div className='z-2 max-w-[1200px] mx-auto'>
				<div className='flex flex-col gap-12 mt-[120px]'>
					<h1 className={`font-bebasNeue text-5xl md:text-[76.29px] tracking-[-0.04em] md:leading-[83.92px]`}>
						SPRZEDAJEMY SAMOCHODY<br></br>Z EUROPY
					</h1>
					<p className={`font-robotoCondensed leading-6`}>
						Kup komfortowy pojazd, aby każda podróż<br></br>była wyjątkowym przeżyciem.
					</p>
					<div className='flex gap-6'>
						<button className='btn btn-blue hover:bg-blue-800'>Zobacz Zdjęcia</button>
						<button className='btn btn-transparent hover:text-primaryWhite hover:bg-blue-800'>Zadzwoń do nas</button>
					</div>
				</div>
			</div>

			<Image
				className='hero-image'
				src={'/Hero.png'}
				width={1064}
				height={404.37}
				alt='cars'
			/>

			<Image
				className='hero-image opacity-70'
				src={'/cien.png'}
				width={1064}
				height={404.37}
				alt='cars'
			/>
		</article>
	);
}