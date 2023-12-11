import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { VentaDetalle } from "./VentaDetalle.type";

export function useGetVentasDetalle(initialState: VentaDetalle[]): VentaDetalle[] {
	const [ventasDetalle, setVentasDetale] = useState<VentaDetalle[]>(initialState);

	const getVentasDetalle = async () => {
		const response = await fetch(`${URL_API}/ventaDetalle`);
		const data = (await response.json()) as VentaDetalle[];

		return data;
	};

	useEffect(() => {
		getVentasDetalle()
			.then((data) => {
				setVentasDetale(data);
			})
			.catch(() => {
				setVentasDetale(initialState);
			});
	}, []);

	return ventasDetalle;
}
