import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MAP_CENTER_COORDS } from "data/constants";
import { ApiRequest } from "api";
import { useLoading } from "hooks/useLoading";

export const Mapa = ({ handleChange, setisOpen }) => {
	const [dataConteudo, setDataConteudo] = useState([]);
	const [markers, setMarkers] = useState([]);
	const loading = useLoading();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		if (dataConteudo && dataConteudo.length > 0) {
			setMarkers(transformarData(dataConteudo));
		}
	}, [dataConteudo]);

	const fetchData = async () => {
		loading.start();
		await fetchConteudo();
		loading.stop();
	};

	const fetchConteudo = async () => {
		try {
			const data = await ApiRequest.listar("conteudo/simples");
			setDataConteudo(data);
		} catch (error) {
			console.error("Error fetching conteudo:", error);
		}
	};

	const transformarData = (data) => {
		const markers = data.map((conteudo) => ({
			position: [parseFloat(conteudo.latitude), parseFloat(conteudo.longitude)],
			title: conteudo.endereco,
		}));
		return markers;
	};

	return (
		<div>
			<MapContainer center={MAP_CENTER_COORDS} zoom={13} style={{ height: "100vh" }}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{markers.map((marker, index) => (
					<Marker key={index} position={marker.position}>
						<Popup>{marker.title}</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};
