import { Bebas_Neue, Roboto_Condensed, Roboto_Flex } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const robotoFlex = Roboto_Flex({
	subsets: ['latin'],
	weight: ['400', '600'],
});

const bebas = Bebas_Neue({
	subsets: ['latin'],
	weight: ['400'],
});
const roboto_con = Roboto_Condensed({
	subsets: ['latin'],
	weight: ['400'],
});

export default function Home() {
	return (
		<>
			<header className='max-w-[1200px] mx-auto'>
				<nav className='pt-4 flex justify-between gap-2.5 '>
					<div>LOGO</div>
					<ul className='flex items-center gap-6'>
						<li>
							<Link
								className={`${robotoFlex.className}`}
								href={'/'}
							>
								Galeria zdjęć
							</Link>
						</li>
						<li>
							<Link
								className={`${robotoFlex.className}`}
								href={'/'}
							>
								FaQ
							</Link>
						</li>
					</ul>
					<button className='btn btn-blue'>Zadzwoń do nas</button>
				</nav>
				<main>
					<div className='flex flex-col gap-12 mt-[120px]'>
						<h1 className={`${bebas.className} text-[76.29px] leading-[83.92px]`}>
							SPRZEDAJEMY SAMOCHODY<br></br>Z EUROPY
						</h1>
						<p className={`${roboto_con.className} leading-6`}>
							Kup komfortowy pojazd, aby każda podróż<br></br>była wyjątkowym przeżyciem.
						</p>
						<div className='flex gap-6'>
							<button className='btn btn-blue'>Zobacz Zdjęcia</button>
							<button className='btn btn-transparent'>Zadzwoń do nas</button>
						</div>
					</div>
				</main>
			</header>

			<section className='mt-[362px] max-w-[1200px] mx-auto w-full'>
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
						<button className={`${robotoFlex.className} text-primaryBlue`}>Samochody osobowe</button>
						<button className={`${robotoFlex.className} text-black`}>Samochody dostawcze</button>
					</div>
				</div>
			</section>

			<section className='mt-20  max-w-[1200px] mx-auto w-full'>
				<div className='overflow-hidden flex gap-16'>
					<Image
						width={600}
						height={446}
						alt='car'
						src={'/slider1.jpg'}
					></Image>
					<Image
						width={600}
						height={446}
						alt='car'
						src={'/slider2.jpeg'}
					></Image>
					<Image
						width={600}
						height={446}
						alt='car'
						src={'/slider3.webp'}
					></Image>
				</div>

				<div className='mt-12 mb-20 flex justify-center items-center'>
					<span>0 0 0 0 0</span>
				</div>
			</section>

			<section className='text-white bg-primaryBlack'>

				<div className='py-[88px] max-w-[1200px] mx-auto w-full flex gap-20 justify-between'>

					<article className='flex flex-col items-start gap-4'>
						<span className={`text-[25px] ${bebas.className} `}>
							Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
						</span>
						<span className={`${roboto_con.className} text-sm`}>
							Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat
							ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
						</span>
						<button className={`${roboto_con.className} text-sm border-b-[1.5px] border-white pb-1.5 `}>Rozwiń </button>
					</article>

					<article className='flex flex-col items-start gap-4'>
						<span className={`text-[25px] ${bebas.className} `}>
							Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
						</span>
						<span className={`${roboto_con.className} text-sm`}>
							Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat
							ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
						</span>
						<button className={`${roboto_con.className} text-sm border-b-[1.5px] border-white pb-1.5 `}>Rozwiń </button>
					</article>

				</div>

			</section>

			<footer className='text-white  border-t-[1px]  border-white bg-primaryBlack'>
				<div className={`max-w-[1200px]  mx-auto flex justify-between ${roboto_con.className}`}>
					<button className='py-6 font-bold'>Cars Spot</button>
					<button className='py-6 font-normal underline-offset-1 underline' >Polityka Prywatnośći</button>
				</div>
			</footer>
		</>
	);
}
