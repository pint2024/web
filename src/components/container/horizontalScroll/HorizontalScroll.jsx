import { Icone } from "components";
import { useRef } from "react";
import "./horizontal-scroll.css";

export function HorizontalScroll({ header, children }) {
	const cardsWrapperRef = useRef();

	const scrollLeft = () => {
		cardsWrapperRef.current.scrollLeft += -1000;
	};

	const scrollRight = () => {
		cardsWrapperRef.current.scrollLeft += 1000;
	};
	return (
		<section className="remove-user-select">
			<div className="d-flex justify-content-between">
				<div>{header}</div>
				<div className="arrowContainer gap-2 mb-4">
					<div onClick={scrollLeft}>
						<Icone iconName="CaretLeftFill" className="h-scroll-icon" />
					</div>
					<div onClick={scrollRight}>
						<Icone iconName="CaretRightFill" className="h-scroll-icon" />
					</div>
				</div>
			</div>
			<div className={"cardsWrapper"} ref={cardsWrapperRef}>
				{children}
			</div>
		</section>
	);
}
