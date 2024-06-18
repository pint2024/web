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
			<td>{motivo}</td>
			<td>
				<Tooltip
					content={<OverlayPerfil imagem={utilizador.imagem} nome={utilizador.nome} tag={`@${utilizador.tag}`} />}
				>
					<Navegar to={`/conta/${utilizador.id}`}>@{utilizador.tag}</Navegar>
				</Tooltip>
			</td>
			<td>{DateUtils.DataNormal(data_criacao)}</td>
			<td>{estado}</td>
			<td>{titulo}</td>
			<td>
				<div className="d-flex gap-2">
					<Botao onClick={() => handleAprovacao(id)} variant={BUTTON_VARIANTS.SUCESSO}>
						<Icone iconName="Check" type={COMMON_TYPES.INVERSO} />
					</Botao>

					<Botao onClick={() => handleRejeicao(id)} variant={BUTTON_VARIANTS.PERIGO}>
						<Icone iconName="X" type={COMMON_TYPES.INVERSO} />
					</Botao>
					<Botao route={`/conteudos/${id_conteudo}`}>
						<Icone iconName="ArrowRight" type={COMMON_TYPES.INVERSO} />
					</Botao>
				</div>
			</td>
		</tr>
	);
}
