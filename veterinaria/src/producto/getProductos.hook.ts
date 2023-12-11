import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Producto } from "./Producto.type";

export function useGetProductos(initialState: Producto[]): Producto[] {
	const [productos, setProductos] = useState<Producto[]>(initialState);

	const getProductos = async () => {
		const response = await fetch(`${URL_API}/productos`);
		const data = (await response.json()) as Producto[];

		return data;
	};

	useEffect(() => {
		getProductos()
			.then((data) => {
				setProductos(data);
			})
			.catch(() => {
				setProductos(initialState);
			});
	}, []);

	return productos;
}
