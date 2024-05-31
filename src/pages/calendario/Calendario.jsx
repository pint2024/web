import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { usePopup } from "hooks/usePopup";
import { Link, useNavigate } from "react-router-dom";

import { DateUtils } from "utils/date.utils";
import { Icone } from "components/index";

export function Calendario() {
	const navigate = useNavigate();
	const [firstDay, setfirstDay] = useState(1);
	const { puOpen, puClose, puClear, setpuTitulo, setpuSubtitulo, setpuIcons, setpuBody, setpuFooter, puCreate } = usePopup();
	const [dataReunioes, setDataReunioes] = useState("");

	useEffect(() => {
		/*const fetchData = async () => {
			const response = await listarRequest({ "/reuniao/listUtilizador", {id: 1} });
			setDataReunioes(response.data.data);
		};

		fetchData();*/
	}, []);

	const events =
		dataReunioes &&
		dataReunioes?.map((evento) => {
			if (evento === null) return null;
			const dataInicio = DateUtils.DataRelativa(evento.data_inicio);
			const dataFim = evento.data_fim ? DateUtils.DataCompleta(evento.data_fim) : dataInicio;
			return {
				title: evento.titulo,
				start: new Date(dataInicio.year, dataInicio.month, dataInicio.day, dataInicio.hour, dataInicio.minute),
				end: new Date(dataFim.year, dataFim.month, dataFim.day, dataFim.hour, dataFim.minute),
				key: evento.id,
				data: evento,
			};
		});

	const setEventData = (data) => {
		setpuTitulo(data.reuniao_titulo);
		setpuIcons(
			<Link to={`/reunioes/${data.reuniao_id}`}>
				<Icone iconName="expand" className="align-self-center" />
			</Link>
		);
		setpuSubtitulo(
			<div className="d-flex">
				UTILIZADOR
				<p>&nbsp;{"· " + DateUtils.DiffDatas(data.reuniao_datacriacao)}</p>
			</div>
		);
		setpuBody(
			<div>
				<div className="gap-4">
					<p> Hóra início: {DateUtils.DataRelativa(DateUtils.DataCompleta(data.reuniao_datainicio))}</p>
					<p> Hora fim (expectado): {DateUtils.DataRelativa(DateUtils.DataCompleta(data.reuniao_datafim))} </p>
					<p> Duração (expectada): {DateUtils.DataRelativa(data.reuniao_datainicio, data.reuniao_datafim)}</p>
				</div>
				<div>
					<p>Local: {data.reuniao_local}</p>
					<p>Descrição: {data.reuniao_assunto}</p>
				</div>
				<div className="mt-3">
					<h4>Contactos</h4>
					<div className="d-flex">
						{data.reunutil_reun.map((user, index) => {
							if (user.reunutil.utilizador_id === data.reun_util.utilizador_id) return null;
							return (
								<p>UTILIZADOR</p>
							);
						})}
					</div>
				</div>
			</div>
		);
	};

	function handleEventDoubleClick(info) {
		const data = info.event.extendedProps.data;
		setEventData(data);
		puOpen();
	}

	function handleDateDoubleClick(info) {
		//// utilizar a confirmacao
		/*Swal.fire({
			title: "Criar reunião?",
			text: "Você será redirecionado!",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: "Confirmar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.value) {
				setTimeout(() => {
					navigate(`/reunioes/criar?data-inicio=${info.dateStr}T09:00&data-fim=${info.dateStr}T10:00`);
				}, 0);
			}
		});*/
	}

	function formatParsedDate(parsedDate) {
		return `${parsedDate.year}-${parsedDate.month}-${parsedDate.day}T${parsedDate.hour}:${parsedDate.minute}`;
	}

	const handleDateSelect = (arg) => {
		const { start, end } = arg;
		const parsedDateStart = DateUtils.DataCompleta(start);
		const parsedDateEnd = DateUtils.DataCompleta(end);

		const formatedParsedDateStart = formatParsedDate(parsedDateStart);
		const formatedParsedDateEnd = formatParsedDate(parsedDateEnd);

		//// UTILIZAR CONFIRMACAO
		/*Swal.fire({
			title: "Criar reunião?",
			text: "Você será redirecionado!",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: "Confirmar",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.value) {
				setTimeout(() => {
					navigate(`/reunioes/criar?data-inicio=${formatedParsedDateStart}&data-fim=${formatedParsedDateEnd}`);
				}, 0);
			}
		});*/
	};

	return (
		<div className="fullcalendar-calendario content-height">
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
					events={events}
					aspectRatio={3}
					locale={"pt"}
					firstDay={firstDay}
				/>
			</div>
		</div>
	);
}
