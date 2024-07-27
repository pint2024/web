import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { DateUtils } from "utils/date.utils";
import { useCarregando } from "hooks/useCarregando";
import { EnumConstants } from "data/enum.constants";
import { useConfirmation } from "hooks/useConfirmation";
import { usePopup } from "hooks/usePopup";
import { Link } from "react-router-dom";
import { Icone, Navegar, Texto } from "components";
import { ApiRequest } from "api/apiRequest";

import "./calendario.css";

export function Calendario() {
	const [firstDay, setfirstDay] = useState(1);
	const [dataEventos, setdataEventos] = useState([]);
	const { startLoading, stopLoading } = useCarregando();
	const { conCreate, conSet, conClear, conOpen } = useConfirmation();
	const { puCreate, puSet, puClear, puOpen } = usePopup();

	useEffect(() => {
		const fetchConteudoData = async () => {
			startLoading();
			try {
				const data = await ApiRequest.listar("conteudo/participando", {
					tipo: [EnumConstants.CONTEUDO_TIPOS.ATIVIDADE.ID, EnumConstants.CONTEUDO_TIPOS.EVENTO.ID],
				});
				setdataEventos(data);
			} catch (error) {
				console.error("Erro ao buscar eventos:", error);
			} finally {
				stopLoading();
			}
		};
		fetchConteudoData();
	}, []);

	if (!dataEventos) {
		return <div>Carregando...</div>;
	}

	const formatEvents = () => {
		if (!dataEventos) return [];
		const eventos_array = [];
		for (let evento of dataEventos) {
			const dataInicio = DateUtils.DataCompleta(evento.data_evento);
			const formattedDate = new Date(
				dataInicio.ano,
				dataInicio.mes - 1,
				dataInicio.dia,
				dataInicio.hora,
				dataInicio.minuto
			);
			eventos_array.push({
				title: evento.titulo,
				start: formattedDate,
				end: formattedDate,
				key: evento.id,
				data: evento,
			});
		}
		return eventos_array;
	};

	const handleDateSelect = (arg) => {
		const { start, end } = arg;
		const formatedParsedDateStart = DateUtils.DataRelativa(start);
		const formatedParsedDateEnd = DateUtils.DataRelativa(end);
	};

	const handleDateDoubleClick = (info) => {
		conSet({
			title: "ola",
			body: "adeus",
			onSuccess: null,
		});
		conOpen();
	};

	const setupPopup = (data) => {
		puClear();
		puSet({
			body: (
				<div>
					<div className="gap-4">
						<Texto>Data do Evento: {DateUtils.DataRelativa(data.data_evento)}</Texto>
						<Texto>Endereço: {data.endereco}</Texto>
						<Texto className="mt-3">{data.descricao}</Texto>
					</div>
				</div>
			),
			headerTitle: (
				<>
					<div>{data.titulo}</div>
					<div className="d-flex">
						<Texto size={0}>
							<Navegar to={`/conta/${data.conteudo_utilizador.id}`}>@{data.conteudo_utilizador.tag}</Navegar>
							&nbsp;{"· " + DateUtils.DataRelativa(data.data_criacao)}
						</Texto>
					</div>
				</>
			),
			headerIcons: (
				<Link to={`/conteudos/${data.id}`}>
					<Icone iconName="ArrowsAngleExpand" className="align-self-center" />
				</Link>
			),
		});
		puOpen();
	};

	const handleEventDoubleClick = (info) => {
		const data = info.event.extendedProps.data;
		setupPopup(data);
	};

	return (
		<div className="fullcalendar-calendario">
			{conCreate()}
			{puCreate()}
			<div className="calendario-contentor">
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					headerToolbar={{
						left: "prev,next today",
						center: "title",
						right: "dayGridMonth,timeGridWeek,timeGridDay",
					}}
					selectable={true}
					select={handleDateSelect}
					dateClick={handleDateDoubleClick}
					eventClick={handleEventDoubleClick}
					events={formatEvents()}
					aspectRatio={3}
					locale={"pt"}
					firstDay={firstDay}
					height={"auto"}
				/>
			</div>
		</div>
	);
}
