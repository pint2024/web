import { useEffect, useState } from "react";
import { Mapa } from "./Mapa";
import { Popup } from "components";

export function MapaPopup({ handleChange, popupState }) {
	const [isOpen, setisOpen] = useState(false);
	const [dataCoords, setdataCoords] = useState(null);

	useEffect(() => {
		setisOpen(popupState);
	}, [popupState]);

	useEffect(() => {
		setdataCoords(dataCoords);
		handleChange(dataCoords);
	}, [dataCoords]);

	return (
		<>
			{isOpen && (
				<Popup
					headerTitle={"Adicionar Topico"}
					onClose={() => setisOpen(false)}
					body={<Mapa handleChange={setdataCoords} />}
				/>
			)}
		</>
	);
}
