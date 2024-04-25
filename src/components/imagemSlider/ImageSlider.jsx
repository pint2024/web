import { Icon } from "components/elementos";
import { Imagem } from "components/elementos/imagem/Imagem";
import { Botao } from "components/form";
import React, { useState } from "react";

export const ImageSlider = ({ images }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const nextSlide = () => {
		const newIndex = (currentImageIndex + 1) % images.length;
		setCurrentImageIndex(newIndex);
	};

	const prevSlide = () => {
		const newIndex = (currentImageIndex - 1 + images.length) % images.length;
		setCurrentImageIndex(newIndex);
	};

	return (
		<article>
			<div className="image-slider d-flex">
				<Botao variant="secundario" onClick={prevSlide}>
					&lt;
				</Botao>
				{images.map((image, index) => (
					<div key={index} style={{ display: index === currentImageIndex ? "block" : "none" }}>
						<Imagem src={image} alt="" style={{ width: "500px", height: "500px" }} />
					</div>
				))}
				<Botao variant="secundario" onClick={nextSlide}>
					&gt;
				</Botao>
			</div>
			{/*<div className="image-slider-dots gap-3">
				{images.map((_, index) => (
					<Icon
						key={index}
						className={`${index === currentImageIndex ? "active" : ""}`}
						iconName="Circle"
						onClick={() => setCurrentImageIndex(index)}
					/>
				))}
			</div>*/}
		</article>
	);
};
