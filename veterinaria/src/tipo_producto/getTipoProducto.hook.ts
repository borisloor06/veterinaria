import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { TipoProducto } from "./TipoProducto.type";

export function useGetTipoProducto(initialState: TipoProducto[]): TipoProducto[] {
	const [tipoProducto, setTipoProducto] = useState<TipoProducto[]>(initialState);

	const getTipoProducto = async () => {
		const response = await fetch(`${URL_API}/tipoProducto`);
		const data = (await response.json()) as TipoProducto[];

		return data;
	};

	useEffect(() => {
		getTipoProducto()
			.then((data) => {
				setTipoProducto(data);
			})
			.catch(() => {
				setTipoProducto(initialState);
			});
	}, []);

	return tipoProducto;
}
