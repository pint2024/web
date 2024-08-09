import { ApiRequest } from "api";
import { Botao, Icone, Navegar, Notificacao } from "components";
import { RefreshIcone } from "components/common/icone/RefreshIcone";
import { Row } from "components/ui/Row";
import { BUTTON_VARIANTS, COMMON_TYPES } from "data/data";
import { EnumConstants } from "data/enum.constants";
import { useLoading } from "hooks/useLoading";
import { usePopupDialogo } from "hooks/usePopupDialogo";
import { useEffect } from "react";
import { useState } from "react";

export function DenunciaPainel() {
  const [dataDenuncias, setDataDenuncias] = useState([]);
  const loading = useLoading();
  const puHandleRevisao = usePopupDialogo();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [dataDenuncias]);

  const fetchData = async () => {
    loading.start();
    const data = await ApiRequest.listar("denuncia");
    setDataDenuncias(data);
    console.log(data);
    loading.stop();
  };

  const handleRefresh = () => {};

  const handleUpdateRevisao = async (id, estado) => {
    console.log(id);
    loading.start();
    puHandleRevisao.conClose();
    await ApiRequest.atualizar("denuncia", id, { estado: estado });
    fetchData();
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

  const handlePopupOpen = (id) => {
    puHandleRevisao.conSet({
      title: `Analisar denuncia`,
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

  return (
    <>
      {puHandleRevisao.conCreate()}
      <div className="d-flex justify-content-end mt-4">
        <RefreshIcone handleRefresh={() => handleRefresh()} />
      </div>
      <table className="painel-tabela">
        <thead>
          <tr>
            <th>Id</th>
            <th>Motivo</th>
            <th>Data de Criação</th>
            <th>Estado</th>
            <th>Comentario</th>
            <th>Denunciado</th>
            <th>Denunciou</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataDenuncias.map((item) => (
            <tr id={`denuncia-${item.id}`} key={item.id}>
              <td>{item.id}</td>
              <td>{item.motivo}</td>
              <td>{item.data_criacao}</td>
              <td>{item.denuncia_estado.estado}</td>
              <td>{item.denuncia_comentario.comentario}</td>
              <td>
                <Navegar
                  to={`/conta/${item.denuncia_comentario.comentario_utilizador.id}`}
                >
                  @{item.denuncia_comentario.comentario_utilizador.tag}
                </Navegar>
              </td>
              <td>
                <Navegar to={`/conta/${item.denuncia_utilizador.id}`}>
                  @{item.denuncia_utilizador.tag}
                </Navegar>
              </td>
              <td>
                <Row className="gap-2">
                  <Botao
                    onClick={() => handlePopupOpen(item.id)}
                    variant={BUTTON_VARIANTS.PERIGO}
                  >
                    <Icone iconName="Hammer" type={COMMON_TYPES.INVERSO} />
                  </Botao>
                  <Botao variant={BUTTON_VARIANTS.SECUNDARIO} route={`/conta/${item.denuncia_utilizador.id}`}>
                    <Icone
                      iconName="PersonFillAdd"
                      type={COMMON_TYPES.INVERSO}
                    />
                  </Botao>
				  <Botao variant={BUTTON_VARIANTS.SECUNDARIO} route={`/conta/${item.denuncia_comentario.comentario_utilizador.id}`}>
                    <Icone
                      iconName="PersonFillSlash"
                      type={COMMON_TYPES.INVERSO}
                    />
                  </Botao>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
