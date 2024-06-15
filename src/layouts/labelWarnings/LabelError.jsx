import { Texto } from "components";
import { COMMON_SIZES, COMMON_TYPES } from "data/data";

const styles = {
	avisoNota: {
		backgroundColor: "red",
		padding: "2px",
		textAlign: "center",
		margin: "5px 0 15px 0"
	},
};

// Aplicando os estilos no componente
export function LabelError() {
	return (
		<div style={styles.avisoNota}>
			<Texto type={COMMON_TYPES.INVERSO} size={COMMON_SIZES.FS1}>Em revisão...</Texto>
		</div>
	);
}
