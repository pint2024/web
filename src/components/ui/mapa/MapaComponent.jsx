import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { Botao, CaixaTexto } from "components";
import { Row } from "../Row";

// Corrigir o ícone padrão do Leaflet que não é exibido corretamente com Webpack
L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

export const MapaComponent = ({ handleChange }) => {
	const [position, setPosition] = useState(null);
	const [address, setAddress] = useState("");

	useEffect(() => {
		handleChange(position);
	}, [position]);

	const useFlyTo = (position) => {
		const map = useMap();
		useEffect(() => {
			if (position) {
				map.flyTo(position, map.getZoom());
			}
		}, [position, map]);
	};

	const LocationMarker = () => {
		const map = useMap();
		useFlyTo(position);

		useMapEvents({
			click(e) {
				console.log(e.latlng)
				setPosition(e.latlng);
				map.flyTo(e.latlng, map.getZoom());
			},
		});

		return position === null ? null : <Marker position={position} />;
	};

	const handleSearch = async (ad) => {
		if (ad) {
			try {
				const response = await axios.get("https://nominatim.openstreetmap.org/search", {
					params: {
						q: ad,
						format: "json",
						addressdetails: 1,
						limit: 1,
					},
				});
				console.log(response);

				if (response.data && response.data.length > 0) {
					const { lat, lon } = response.data[0];
					const newPosition = response.data[0];
					setPosition(newPosition);
				} else {
					alert("Endereço não encontrado!");
				}
			} catch (error) {
				console.error("Erro na busca do endereço:", error);
				alert("Ocorreu um erro ao buscar o endereço. Tente novamente.");
			}
		}
	};

	const handleGetCoords = () => {
		if (position) {
			alert(`Coordenadas selecionadas: ${position}`);
		} else {
			alert("Nenhuma coordenada selecionada!");
		}
	};

	return (
		<div>
			<Row>
				<CaixaTexto
					value={address}
					handleChange={(e) => setAddress(e.target.value)}
					placeholder="Digite um endereço"
					handleSubmit={() => handleSearch(address)}
				/>
				<Botao onClick={handleGetCoords}>Obter Coordenadas</Botao>
			</Row>
			<MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "80vh", width: "100%" }}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				<LocationMarker />
			</MapContainer>
		</div>
	);
};
