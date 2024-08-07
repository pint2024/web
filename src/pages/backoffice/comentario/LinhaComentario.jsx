import { Botao, Icone, Navegar, OverlayPerfil, Tooltip } from "components";
import { Row } from "components/ui/Row";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { usePopupDialogo } from "hooks/usePopupDialogo";
import { DateUtils } from "utils/date.utils";

export function LinhaComentario({
	utilizador,
	data_criacao,
	estado,
	titulo,
	id_comentario,
	id_conteudo,
	id_revisao,
	handlePopupOpen,
	handleDenunciasInfoOpen
}) {
	return (
		<tr key={id_revisao}>
			<td>
				<Tooltip
					content={<OverlayPerfil imagem={utilizador?.imagem} nome={utilizador?.nome} tag={`@${utilizador?.tag}`} />}
				>
					<Navegar to={`/conta/${utilizador?.id}`}>@{utilizador?.tag}</Navegar>
				</Tooltip>
			</td>
			<td>{DateUtils.DataNormal(data_criacao)}</td>
			<td>{estado}</td>
			<td>
				<Navegar to={`/conteudos/${id_conteudo}#comentario-${id_comentario}`}>{titulo}</Navegar>
			</td>
			<td>
				<Row className="gap-2">
					<Botao onClick={() => handlePopupOpen(id_revisao, titulo)} variant={BUTTON_VARIANTS.PERIGO}>
						<Icone iconName="Hammer" type={COMMON_TYPES.INVERSO} />
					</Botao>
					<Botao onClick={() => handleDenunciasInfoOpen(id_comentario)}>
						<Icone iconName="ShieldSlashFill" type={COMMON_TYPES.INVERSO} />
					</Botao>
					<Botao route={`/conta/${utilizador?.id}`} variant={BUTTON_VARIANTS.SECUNDARIO}>
						<Icone iconName="PersonFill" type={COMMON_TYPES.INVERSO} />
					</Botao>
					<Botao route={`/conteudos/${id_conteudo}#comentario-${id_comentario}`} variant={BUTTON_VARIANTS.SECUNDARIO}>
						<Icone iconName="ChatFill" type={COMMON_TYPES.INVERSO} />
					</Botao>
				</Row>
			</td>
		</tr>
	);
}
