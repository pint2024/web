import React, { useEffect, useState } from "react";
import { useLoading } from "hooks/useLoading";
import { EnumConstants } from "data/enum.constants";
import "../painel-tabela.css";
import { LinhaComentario } from "./LinhaComentario";
import { ApiRequest } from "api/apiRequest";
import { Botao, Icone, Notificacao, Texto } from "components";
import { usePopupDialogo } from "hooks/usePopupDialogo";
import { BUTTON_VARIANTS } from "data/data";
import { Filtros } from "./Filtros";
import { RefreshIcone } from "components/common/icone/RefreshIcone";
import { usePopup } from "hooks/usePopup";
import { DenunciaCartao } from "components/container/cartoes/DenunciaCartao";

export function ComentarioPainel() {
  const [dataConteudo, setdataConteudo] = useState(null);
  const [filteredUtilizadores, setFilteredUtilizadores] = useState([]);
  const loading = useLoading();
  const puHandleRevisao = usePopupDialogo();
  const popup = usePopup();

  useEffect(() => {
    fetchConteudoData();
  }, []);

  const handleRefresh = () => {
    fetchConteudoData();
  };

  const fetchConteudoData = async () => {
    loading.start();
    const data = await ApiRequest.listar("comentario/revisao");
    setdataConteudo(data);
    setFilteredUtilizadores(data);
    loading.stop();
  };

  const handleUpdateRevisao = async (id, estado) => {
    loading.start();
    puHandleRevisao.conClose();
    await ApiRequest.atualizar("revisao", id, { estado: estado });
    fetchConteudoData();
    Notificacao("Estado da revisão atualizado com sucesso!");
  };

  const handleRevisaoAprovada = async (id) => {
    handleUpdateRevisao(id, EnumConstants.ESTADOS.APROVADO);
  };

  const handleRevisaoRejeitada = async (id) => {
    handleUpdateRevisao(id, EnumConstants.ESTADOS.REJEITADO);
  };

  const handleRevisaoAnalise = async (id) => {
    handleUpdateRevisao(id, EnumConstants.ESTADOS.EM_ANALISE);
  };

  if (!dataConteudo) return;

  function setupTableContent() {
    return (
      filteredUtilizadores &&
      filteredUtilizadores.map((item) => (
        <LinhaComentario
          utilizador={item?.comentario_utilizador}
          data_criacao={item.data_criacao}
          estado={item.revisao_comentario[0].revisao_estado?.estado}
          titulo={item?.comentario}
          id_conteudo={item.comentario_conteudo.id}
          id_comentario={item.id}
          id_revisao={item.revisao_comentario[0].id}
          handlePopupOpen={handlePopupOpen}
          handleDenunciasInfoOpen={handleDenunciasInfoOpen}
          hasDenuncias={item.denuncia_comentario.length > 0}
        />
      ))
    );
  }

  const handlePopupOpen = (id, titulo) => {
    puHandleRevisao.conSet({
      title: `Rever: ${titulo}`,
      body: null,
      footer: (
        <>
          <Botao
            variant={BUTTON_VARIANTS.SUCESSO}
            onClick={() => handleRevisaoAprovada(id)}
          >
            <Icone iconName="XLg" className="icon-inverse" /> Aprovar
          </Botao>
          <Botao
            variant={BUTTON_VARIANTS.SECUNDARIO}
            onClick={() => handleRevisaoAnalise(id)}
          >
            <Icone iconName="XLg" className="icon-inverse" /> Análise
          </Botao>
          <Botao
            variant={BUTTON_VARIANTS.PERIGO}
            onClick={() => handleRevisaoRejeitada(id)}
          >
            <Icone iconName="XLg" className="icon-inverse" /> Rejeitar
          </Botao>
        </>
      ),
    });
    puHandleRevisao.conOpen();
  };

  const handleDenunciasInfoOpen = (id) => {
    const comentario = dataConteudo.find((item) => item.id === id);
    const denuncia = comentario.denuncia_comentario;
    popup.puSet({
      headerTitle: `Denuncias`,
      body: (
        <>
          {denuncia.map((item, i) => (
            <>
              <DenunciaCartao
                id={item?.id}
                title={item?.motivo}
                username={item?.denuncia_utilizador?.tag}
                status={item?.denuncia_estado?.estado}
              />
            </>
          ))}
        </>
      ),
    });
    popup.puOpen();
  };

  return (
    <>
      {popup.puCreate()}
      {puHandleRevisao.conCreate()}
      <Filtros data={dataConteudo} setFiltered={setFilteredUtilizadores} />
      <div className="d-flex justify-content-end mt-4">
        <RefreshIcone handleRefresh={() => handleRefresh()} />
      </div>
      <table className="painel-tabela">
        <thead>
          <tr>
            <th>Utilizador</th>
            <th>Data de Criação</th>
            <th>Estado</th>
            <th>Comentário</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{setupTableContent()}</tbody>
      </table>
    </>
  );
}
