import React, { useState, useRef, useEffect } from "react";
import "./tooltip.css";

export const Tooltip = (props) => {
	let timeout;
	const [active, setActive] = useState(false);
	const tooltipChildrenRef = useRef(null);
	const tooltipRef = useRef(null);

	const showTip = () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setActive(true);
		}, props.delay || 400);
	};

	const hideTip = () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setActive(false);
		}, props.delay || 400);
	};

	useEffect(() => {
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	const handleMouseLeave = () => {
		hideTip();
	};

	const handleMouseEnterTooltip = () => {
		clearTimeout(timeout);
	};

	return (
		<div className="Tooltip-Wrapper" onMouseEnter={showTip} onMouseLeave={handleMouseLeave} ref={tooltipRef}>
			{props.children}
			{active && (
				<div
					ref={tooltipChildrenRef}
					className={`Tooltip-Tip ${props.direction || "top"}`}
					onMouseEnter={handleMouseEnterTooltip}
					onMouseLeave={handleMouseLeave}
				>
					{props.content}
				</div>
			)}
		</div>
	);
};
