import { Botao, ComboBox } from "components/form";
import { Icon, Divider } from "components/elementos";
import { Post } from "../../components/cartoes/post/Post";
import { ORDER_OPTIONS } from "data/constants";

export const Atividade = () => {
	return (
		<div>
			<section className="d-flex">
				<div>
					<Botao route="criar">
						<Icon iconName="Plus" className="text-types-inverse" />
						Adicionar
					</Botao>
				</div>
				<div className="d-flex justify-content-end gap-2">
					<ComboBox placeholder="Recentes" options={ORDER_OPTIONS} />
					<ComboBox placeholder="Todos" options={ORDER_OPTIONS} />
				</div>
			</section>
			<section>
				{Array.from({ length: 10 }, (_, index) => (
					<>
						<Divider />
						<Post />
					</>
				))}
			</section>
		</div>
	);
};
