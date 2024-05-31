import { ComboBoxSections } from "components/form/comboBox/ComboBoxSections";
import { Classificacao } from "components/ui/controlosInterecao/classificacao/Classificacao";
import { useState } from "react";

export function PaginaInicial() {
	const [rating, setRating] = useState(0);

	return (
		<>
			Página Inicial
			<Classificacao rating={rating} setRating={setRating} />
		</>
	);
}
