import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

/** Components */

function Layout() {
	return (
		<div className='Layout'>
			<section style={{ display: 'block' }}>
				<Header />
			</section>
			<main className='content-wrapper'>
				<Outlet />
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
				<p>Ola daniel</p>
			</main>
			<footer>
			<Footer/>
			</footer>
		</div>
	);
}

export default Layout;