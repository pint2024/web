import { ComboBoxSections } from "components/form/comboBox/ComboBoxSections";
import { ComboBox, Divisor, Icon, Post, Botao, Dropdown, Texto } from "components/index";
import { CONTEUDO_TIPOS, ORDER_OPTIONS, TOPICOS_OPTIONS } from "data/data";
import Placeholder from "assets/images/placeholder.jpg";
import { PLACEHOLDER_TEXT, PLACEHOLDER_TITLE } from "data/constants";
import { ConteudoSeccoes } from "./ConteudoSeccoes";

export function Conteudo() {
	return (
		<div>
			<section className="d-flex gap-3">
				<div>
					<Dropdown
						items={[
							{ nome: "Evento", rota: `criar/${CONTEUDO_TIPOS.EVENTO}` },
							{ nome: "Atividade", rota: `criar/${CONTEUDO_TIPOS.ATIVIDADE}` },
							{ nome: "Recomendação", rota: `criar/${CONTEUDO_TIPOS.RECOMENDACAO}` },
							{ nome: "Espaço", rota: `criar/${CONTEUDO_TIPOS.ESPACO}` },
						]}
					>
						<Botao>
							<Icon iconName="Plus" className="text-types-inverse" />
							Adicionar
						</Botao>
					</Dropdown>
				</div>
				<div className="d-flex justify-content-end gap-3">
					<ComboBox placeholder="Recentes" options={ORDER_OPTIONS} />
					<ComboBoxSections items={TOPICOS_OPTIONS} />
				</div>
			</section>
			<section>
				<ConteudoSeccoes titulo={"Espaço"} routeTo={"espacos"} />
				<ConteudoSeccoes titulo={"Atividade"} routeTo={"atividades"} />
				<ConteudoSeccoes titulo={"Evento"} routeTo={"eventos"} />
				<ConteudoSeccoes titulo={"Recomendações"} routeTo={"recomendacoes"}/>
			</section>
		</div>
	);
}
