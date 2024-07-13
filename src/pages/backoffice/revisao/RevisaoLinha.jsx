import { Botao, Icone, Navegar, OverlayPerfil, Tooltip } from "components";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { DateUtils } from "utils/date.utils";

export function RevisaoLinha({
	id,
	motivo,
	utilizador,
	data_criacao,
	estado,
	titulo,
	id_conteudo,
	handleAprovacao,
	handleRejeicao,
}) {
	return (
		<tr key={id}>
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
				<Navegar to={`/conteudos/${id_conteudo}`}>{titulo}</Navegar>
			</td>
			<td>
				<div className="d-flex gap-2">
					<Botao onClick={() => handleAprovacao(id)} variant={BUTTON_VARIANTS.SUCESSO}>
						<Icone iconName="Check" type={COMMON_TYPES.INVERSO} />
					</Botao>

					<Botao onClick={() => handleRejeicao(id)} variant={BUTTON_VARIANTS.PERIGO}>
						<Icone iconName="X" type={COMMON_TYPES.INVERSO} />
					</Botao>
				</div>
			</td>
		</tr>
	);
}
