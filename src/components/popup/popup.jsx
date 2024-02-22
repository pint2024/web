import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useRef } from 'react';


export default function Popup({ titulo, subtitulo, childrenHeaderIcons, childrenBody, childrenFooter, onClose }) {
	const popupRef = useRef(null);

	function handlePopupClose() {
		onClose();
	}

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				handlePopupClose();
			}
		};
		window.addEventListener('keyup', handleKeyDown);
		return () => {
			window.removeEventListener('keyup', handleKeyDown);
		};
	});

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (popupRef.current && !popupRef.current.contains(event.target)) {
				handlePopupClose()
			}
		};
		window.addEventListener('mouseup', handleOutsideClick);
		return () => {
			window.removeEventListener('mouseup', handleOutsideClick);
		};
	});

	return (
		<div className="Popup">
			<div>
				<div className="modal-backdrop bg-dark opacity-50"></div>
				<div className="modal fade show" id={'popuploadable'} aria-hidden="true" style={{ display: 'block' }}>
					<div className="modal-dialog modal-lg" style={{ maxHeight: 90 + 'vh', height: '100%' }}>
						<div className="modal-content" style={{ height: '100%' }} ref={popupRef}>
							<div className="modal-header">
								<div>
									<h2 className="modal-title" id="exampleModalLabel">{titulo}</h2>
									<div>
										{subtitulo}
									</div>
								</div>
								<div className="d-flex align-items-center">
									{childrenHeaderIcons}
									<FontAwesomeIcon icon={['fas', 'x']} className="FontAwesomeIcons" title="Fechar" onClick={handlePopupClose} />
								</div>
							</div>

							{childrenBody && (
								<div className="modal-body" style={{ overflowY: 'auto' }}>
									{childrenBody}
								</div>
							)}
							{childrenFooter &&
								<div className="modal-footer">
									{childrenFooter}
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}