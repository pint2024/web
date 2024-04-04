import React from "react";

import './reporting.css'

/** Componentes */
import { ReportingComponent } from "./reportingComponent";
import BarChart from "src/components/Graficos/barChart";
import SubheaderMenu from "../../../layouts/dashboardHeader/DashboardHeader";


export function Reporting() {
	const chartLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'];
	const chartDatasets = [
		{
			label: 'Dataset 1',
			data: [10, 20, 330],
			backgroundColor: ['red', 'blue', 'green'],
		},
		{
			label: 'Dataset 2',
			data: [105, 25, 35],
			backgroundColor: ['yellow', 'purple', 'black'],
		},
		{
			label: 'Dataset 3',
			data: [105, 25, 35],
			backgroundColor: ['gray', 'white', 'lightblue'],
		},
	];

	return (
		<div>
			<SubheaderMenu itemAtivo={1} />
			<ReportingComponent
				active={0}
			/>
			<BarChart labels={chartLabels} datasets={chartDatasets} />
		</div>
	);
}
