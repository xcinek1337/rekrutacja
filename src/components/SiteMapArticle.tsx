import Image from 'next/image';

export function SiteMapArticle({ title, content }: { title: string; content: string }) {
	return (
		<article className='flex flex-col items-start gap-4'>
			<span className='text-[25px] tracking-[-0.03em] font-bebasNeue'>{title}</span>
			<span className='font-robotoCondensed text-sm'>{content}</span>
			<button className='font-robotoCondensed flex gap-1.5 text-sm border-b-[1.5px] border-white pb-1.5'>
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
	);
}
