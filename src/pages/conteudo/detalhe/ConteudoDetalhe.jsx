import { Texto, PequenoPerfil, Imagem, Botao, ControlosInteracao, Rotulo } from "components/index";
import { PLACEHOLDER_TEXT, PLACEHOLDER_TITLE } from "data/constants";
import { useEffect, useState } from "react";
import User from "assets/images/user-default.png";
import Ex1 from "assets/images/examples/e-1.jpg";
import Ex2 from "assets/images/examples/e-2.jpg";
import Ex3 from "assets/images/examples/e-3.jpg";
import Ex4 from "assets/images/examples/e-4.jpg";
import Ex5 from "assets/images/examples/e-5.jpg";
import { Album } from "./Album";
import { ComentarioSeccao } from "./ComentarioSeccao";
import { BUTTON_VARIANTS, COMMON_SIZES, COMMON_TYPES } from "data/data";
import "./conteudo-detalhe.css";
import { ImagemModal } from "components/overlay/imagemModal/ImagemModal";
import { Classificacao } from "components/ui/controlosInterecao/classificacao/Classificacao";
import { useCarregando } from "hooks/useCarregando";
import { useParams } from "react-router-dom";
import { Request } from "api";
import { DateUtils } from "utils/date.utils";
import { LabelError } from "layouts/labelWarnings/LabelError";
import { EnumConstants } from "data/enum.constants";
import { DBUtils } from "utils/db.utils";

export function ConteudoDetalhe() {
	const [dataDetalhe, setdataDetalhe] = useState(null);
	const { startLoading, stopLoading } = useCarregando();
	const { id } = useParams();

	useEffect(() => {
		const fetchConteudoData = async () => {
			startLoading();
			const data = await Request.obter("conteudo", id);
			setdataDetalhe(data);
			stopLoading();
		};
		fetchConteudoData();
	}, []);

	if (!dataDetalhe) return;

	const formatAlbumImages = () => {
		const array_album = [];
		for (let item of dataDetalhe.album_conteudo) {
			console.log(item);
			array_album.push(item.imagem);
		}
		return array_album;
	};

	return (
		<>
			{DBUtils.checkRevisao(dataDetalhe.revisao_conteudo) && <LabelError />}
			<div className="AtividadeDetalhe" id={dataDetalhe.id}>
				<section className="conteudo-detalhe-conteudo">
					<div className="conteudo-detalhe-info">
						<PequenoPerfil
							id={dataDetalhe.conteudo_utilizador.id}
							imagem={dataDetalhe.conteudo_utilizador.imagem}
							nome={dataDetalhe.conteudo_utilizador.nome + " " + dataDetalhe.conteudo_utilizador.sobrenome}
							data={DateUtils.DataRelativa(dataDetalhe.data_criacao)}
						/>
					</div>
					<div className="conteudo-detalhe-titulo">
						<Texto size={COMMON_SIZES.FS3} className="">
							{dataDetalhe.titulo}
						</Texto>
					</div>
					<div className="imagem-container">
						<ImagemModal imagemSelecionada={dataDetalhe.imagem} description={dataDetalhe.titulo}>
							<Imagem
								src={dataDetalhe.imagem}
								className="conteudo-detalhe-imagem"
								style={{ objectFit: "cover" }}
							/>
						</ImagemModal>
					</div>
					<div className="conteudo-detalhe-descricao">
						<Texto className="">{dataDetalhe.descricao}</Texto>
					</div>
					<div className="conteudo-detalhe-botoes"></div>
				</section>
				<section className="conteudo-detalhe-informacoes">
					<div className="gap-2 d-flex mt-3 mb-2">
						<Rotulo
							info={dataDetalhe.conteudo_tipo.tipo}
							backgroundColor={"gold"}
							textColor={COMMON_TYPES.PRIMARIO}
						/>
						<Rotulo info={dataDetalhe.conteudo_subtopico.subtopico_topico.topico} />
						<Rotulo info={dataDetalhe.conteudo_subtopico.area} />
					</div>
					{dataDetalhe.preco && <div>Preço: {dataDetalhe.preco}</div>}
					{dataDetalhe.classificacao && <div>Classificação: {dataDetalhe.classificacao}</div>}
					{dataDetalhe.tipo === EnumConstants.CONTEUDO_TIPOS.ATIVIDADE.ID ||
					dataDetalhe.tipo === EnumConstants.CONTEUDO_TIPOS.EVENTO.ID ? (
						<div>
							<Botao>Participar</Botao>
						</div>
					) : null}
					<div className="mt-3">
						<Album imagens={formatAlbumImages()} />
					</div>
				</section>
			</div>
			<div className="conteudo-detalhe-interacoes">
				<section>
					<ControlosInteracao />
				</section>
				<section className="d-flex gap-2 mt-2">
					<Botao>Adicionar ao Album</Botao>
					<Botao variant={BUTTON_VARIANTS.SECUNDARIO}>Editar</Botao>
					<Botao variant={BUTTON_VARIANTS.PERIGO}>Apagar</Botao>
				</section>
				<section>
					<ComentarioSeccao comentarios={dataDetalhe.comentario_conteudo} />
				</section>
			</div>
		</>
	);
}
