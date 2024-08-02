import { Botao } from "components";
import { MapaPopup } from "components/ui/mapa/MapaPopup";
import { useEffect, useState } from "react";

export function Mapa() {
	const [isa, setisa] = useState(false);
	const [isb, setisb] = useState(false);

	useEffect(() => {
		console.log(isb);
	}, [isb]);

	return (
		<>
			<MapaPopup popupState={isa} handleChange={setisb} />
			<Botao onClick={() => setisa(true)}></Botao>
		</>
	);
}
