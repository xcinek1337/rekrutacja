import Footer from '@/components/Footer';
import Galerry from '@/components/Gallery';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero';
import SiteMap from '@/components/SiteMap';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Galerry />
			<SiteMap />
			<Footer />
		</>
	);
}