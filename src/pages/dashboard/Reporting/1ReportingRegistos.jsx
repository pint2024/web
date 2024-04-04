import React from "react";

import './reporting.css'

/** Componentes */
import { ReportingComponent } from "./1ReportingComponent";


function ReportingRegistos() {
	return (
		<div>
			<ReportingComponent
				active={5}
			/>
		</div>
	);
}

export default ReportingRegistos;