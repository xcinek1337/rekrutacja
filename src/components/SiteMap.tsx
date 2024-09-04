import { SiteMapArticle } from '@/components/SiteMapArticle';

const articles = [
	{
		title: 'Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.',
		content:
			'Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]',
	},
	{
		title: 'Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.',
		content:
			'Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]',
	},
];

export default function SiteMap() {
	return (
		<section className='px-4 lg:px-0 text-white bg-primaryBlack'>
			<div className='py-[88px] max-w-[1200px] mx-auto w-full flex flex-col md:flex-row gap-12 justify-between'>
				{articles.map((a) => {
					return (
						<SiteMapArticle
							key={a.title}
							content={a.content}
							title={a.title}
						/>
					);
				})}
			</div>
		</section>
	);
}
