import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Venta } from "./Venta.type";

export function useGetVentas(initialState: Venta[]): Venta[] {
	const [ventas, setVentas] = useState<Venta[]>(initialState);

	const getVentas = async () => {
		const response = await fetch(`${URL_API}/ventas`);
		const data = (await response.json()) as Venta[];

		return data;
	};

	useEffect(() => {
		getVentas()
			.then((data) => {
				setVentas(data);
			})
			.catch(() => {
				setVentas(initialState);
			});
	}, []);

	return ventas;
}
