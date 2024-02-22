import { Outlet } from 'react-router-dom';
import Header from '../Header/header';

/** Components */

function Layout() {
	return (
		<div className='Layout'>
			<Header />
			<main className='content-wrapper'>
				<Outlet />
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default Layout;