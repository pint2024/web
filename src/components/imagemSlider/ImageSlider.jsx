import { Icon } from "components/elementos";
import { Imagem } from "components/elementos/imagem/Imagem";
import { Botao } from "components/form";
import React, { useEffect, useState } from "react";

import "./imageSlider.css";

export const ImageSlider = ({ images }) => {
	const [imagesArray, setimagesArray] = useState([]);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		setimagesArray(images);
	}, []);

	const nextSlide = () => {
		const newIndex = (currentImageIndex + 1) % imagesArray.length;
		setCurrentImageIndex(newIndex);
	};

	const prevSlide = () => {
		const newIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
		setCurrentImageIndex(newIndex);
	};

	const changeSlide = (index) => {
		const newIndex = index;
		setCurrentImageIndex(newIndex);
	};

	return (
		<article>
			<div className="image-slider d-flex">
				<Botao variant="secundario" onClick={prevSlide}>
					&lt;
				</Botao>
				{imagesArray.map((image, index) => (
					<div key={index} style={{ display: index === currentImageIndex ? "flex" : "none" }}>
						<img src={image} className="image-slider-image" />
					</div>
				))}
				<Botao variant="secundario" onClick={nextSlide}>
					&gt;
				</Botao>
			</div>
			<div className="gap-3 d-flex align-items-center">
				{imagesArray.map((_, index) => (
					<Icon
						key={index}
						className="cursor-pointer"
						iconName={`${index === currentImageIndex ? "Circle" : "CircleFill"}`}
						onClick={() => changeSlide(index)}
					/>
				))}
			</div>
		</article>
	);
};
