import './bloco.css';

export function Bloco({props, children}) {
	return (
		<div className='main-bloco'>
				{children}
		</div>
	);
};