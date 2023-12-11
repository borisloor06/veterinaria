import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Compra } from "./Compra.type";

export function useGetCompras(initialState: Compra[]): Compra[] {
	const [compra, setCompra] = useState<Compra[]>(initialState);

	const getCompras = async () => {
		const response = await fetch(`${URL_API}/compras`);
		const data = (await response.json()) as Compra[];

		return data;
	};

	useEffect(() => {
		getCompras()
			.then((data) => {
				setCompra(data);
			})
			.catch(() => {
				setCompra(initialState);
			});
	}, []);

	return compra;
}
