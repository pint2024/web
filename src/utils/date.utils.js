import { monthName, weekName } from "data/data";

export function DataCompleta(data = new Date()) {
	const dateObj = new Date(data);
	return {
		data: dateObj,
		ano: dateObj.getFullYear(),
		mesNome: monthName[dateObj.getMonth()],
		mes: dateObj.getMonth() + 1,
		semana: weekName[dateObj.getDay()],
		dia: dateObj.getDate(),
		hora: dateObj.getHours(),
		minuto: dateObj.getMinutes(),
		segundo: dateObj.getSeconds(),
	};
}

export function DiffDatas(data1, data2 = new Date()) {
	const dataObj1 = new Date(data1);
	const dataObj2 = new Date(data2);
	const diff = Math.abs(dataObj2 - dataObj1);

	const millInSecond = 1000;
	const millInMinute = millInSecond * 60;
	const millInHour = millInMinute * 60;
	const millInDay = millInHour * 24;
	const millInMonth = millInDay * 30;
	const millInYear = millInDay * 365;

	return {
		ano: Math.floor(diff / millInYear),
		mes: Math.floor(diff / millInMonth),
		dia: Math.floor(diff / millInDay),
		hora: Math.floor(diff / millInHour),
		minuto: Math.floor(diff / millInMinute),
		segundo: Math.floor(diff / millInSecond),
		milisegundo: diff,
	};
}

export function DataRelativa(date) {
	const dataCriacao = DataCompleta(date);
	const diff = DiffDatas(date);

	if (diff.ano > 0) return `${dataCriacao.mesNome} de ${dataCriacao.ano}`;
	else if (diff.mes > 0 || diff.dia > 0) return `${dataCriacao.dia} de ${dataCriacao.mesNome}`;
	else if (diff.hora > 0) return `${diff.hora}h`;
	else if (diff.minuto > 0) return `${diff.minuto}m`;
	else if (diff.segundo > 0) return `${diff.segundo}s`;
}
