import { Icone } from "components";

export function Classificacao({ rating, setRating }) {
	return (
		<div className="remove-user-select">
			{[1, 2, 3, 4, 5].map((star) => {
				return (
					<Icone
						iconName={"StarFill"}
						className="start"
						style={{
							cursor: "pointer",
							color: rating >= star ? "gold" : "gray",
							fontSize: `25px`,
						}}
						onClick={() => {
							setRating(star);
						}}
					/>
				);
			})}
		</div>
	);
}
