import React, { useState } from "react";
import "./imagem-modal.css";
import { Icone, Imagem, Texto } from "components";
import { COMMON_TYPES } from "data/data";

export function ImagemModal({ imageSrc, description, children }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<div>
			<div id="myImg" onClick={openModal} className="thumbnail">
				{children}
			</div>
			{isOpen && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<Imagem src={imageSrc} alt={description} className="modal-image" />
						<Texto type={COMMON_TYPES.INVERSO} className="modal-caption">
							{description}
						</Texto>
					</div>
					<Icone iconName="X" className="close" onClick={closeModal} />
				</div>
			)}
		</div>
	);
}
