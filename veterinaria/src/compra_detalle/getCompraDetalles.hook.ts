import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { CompraDetalle } from "./CompraDetalle.type";

export function useGetComprasDetalles(initialState: CompraDetalle[]): CompraDetalle[] {
	const [compraDetalle, setCompraDetalle] = useState<CompraDetalle[]>(initialState);

	const getComprasDetalle = async () => {
		const response = await fetch(`${URL_API}/detalleCompras`);
		const data = (await response.json()) as CompraDetalle[];

		return data;
	};

	useEffect(() => {
		getComprasDetalle()
			.then((data) => {
				setCompraDetalle(data);
			})
			.catch(() => {
				setCompraDetalle(initialState);
			});
	}, []);

	return compraDetalle;
}
