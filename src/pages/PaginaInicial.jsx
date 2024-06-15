import { Icone, Imagem, Popup } from "components/index";
import { useState } from "react";
import user1 from "assets/images/examples/e-1.jpg";
import user2 from "assets/images/examples/e-2.jpg";
import user3 from "assets/images/examples/e-3.jpg";
import user4 from "assets/images/examples/e-4.jpg";
import user5 from "assets/images/examples/e-5.jpg";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { Link } from "react-router-dom";
import { DateUtils } from "utils/date.utils";

export function PaginaInicial() {
	return (
		<>
			Página Inicial
			<ImagemModal imagemSelecionada={user2} description={"oi"}>
				<Imagem src={user2} />
			</ImagemModal>
			{/*<Popup
				body={
					<div>
						<div className="gap-4">
							<p> Data: Hoje caralho</p>
						</div>
						<div>
							<p>Local: na casa do daniel</p>
							<p>Descrição: nada</p>
						</div>
					</div>
				}
				headerTitle={
					<>
						<div>joao pedofilo</div>
						<div className="d-flex">@lsebastiao</div>
					</>
				}
				headerIcons={
					<Link to={`/conteudos/1`}>
						<Icone iconName="XLg" className="align-self-center" />
					</Link>
				}
			/>*/}
		</>
	);
}
