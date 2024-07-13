import { Icone } from "components";

export function Classificacao({ value, handleChange }) {
	return (
		<div className="remove-user-select">
			{[1, 2, 3, 4, 5].map((star) => {
				return (
					<Icone
						key={star}
						iconName={"StarFill"}
						className="star"
						style={{
							cursor: "pointer",
							color: value >= star ? "gold" : "gray",
							fontSize: `25px`,
						}}
						onClick={() => {
							handleChange(star);
						}}
					/>
				);
			})}
		</div>
	);
}
