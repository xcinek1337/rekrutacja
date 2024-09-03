'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Slider() {
	const [slide, setSlide] = useState(1);
	const [totalWidth, setTotalWidth] = useState(250);

	const images = ['/slide1.png', '/slide2.png', '/slide3.png', '/slide4.png', '/slide5.png'];

	useEffect(() => {
		const interval = setInterval(() => {
			setSlide((prevSlide) => (prevSlide === images.length ? 1 : prevSlide + 1));
		}, 5555);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const updateItemsPerSlide = () => {
			const screenWidth = window.innerWidth;

			if (screenWidth > 1280) {
				setTotalWidth(600);
			} else if (screenWidth <= 1280 && screenWidth >= 900) {
				setTotalWidth(400);
			} else if (screenWidth <= 1280 && screenWidth >= 500) {
				setTotalWidth(446);
			} else if (screenWidth < 500) {
				setTotalWidth(250);
			}
		};

		updateItemsPerSlide();
		window.addEventListener('resize', updateItemsPerSlide);

		return () => window.removeEventListener('resize', updateItemsPerSlide);
	}, []);

	const translateX = (slide - 1) * (totalWidth + 64);

	return (
		<section className='mt-20 w-[250px] phablet:w-[446px] laptop:w-[864px] xl:w-[1264px] mx-auto overflow-hidden'>
			<div className='carousel-container overflow-hidden flex'>
				<div
					className='carousel-track flex transition-transform duration-500 ease-in-out gap-16'
					style={{ transform: `translateX(-${translateX}px)` }}
				>
					{images.map((src, index) => (
						<Image
							key={index}
							className='w-[250px] h-[250px] phablet:w-[446px] phablet:h-[446px]  laptop:w-[400px] laptop:h-[400px] xl:w-[600px] xl:h-[446px] '
							width={600}
							height={446}
							alt={`car`}
							src={src}
						></Image>
					))}
				</div>
			</div>

			<div className='mt-12 mb-20 flex justify-center items-center'>
				{Array.from({ length: Math.ceil(images.length) }).map((_, index) => (
					<button
						key={index}
						role='button'
						aria-label={`Slide ${index + 1}`}
						aria-controls='carousel'
						className={`w-2 h-2 mx-1 rounded-full ${slide === index + 1 ? 'bg-primaryBlue' : 'bg-gray-200'}`}
						onClick={() => setSlide(index + 1)}
					></button>
				))}
			</div>
		</section>
	);
}
