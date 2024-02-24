import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

/** Components */

function Layout() {
	return (
		<div className='Layout'>
			<section style={{ display: 'block' }}>
				<Header />
			</section>
			<main className='content-wrapper'>
				<Outlet />
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default Layout;