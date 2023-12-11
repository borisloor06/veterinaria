import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Proveedor } from "./Proveedor.type";

export function useGetProveedor(initialState: Proveedor[]): Proveedor[] {
	const [proveedor, setProveedor] = useState<Proveedor[]>(initialState);

	const getProveedor = async () => {
		const response = await fetch(`${URL_API}/proveedores`);
		const data = (await response.json()) as Proveedor[];

		return data;
	};

	useEffect(() => {
		getProveedor()
			.then((data) => {
				setProveedor(data);
			})
			.catch(() => {
				setProveedor(initialState);
			});
	}, []);

	return proveedor;
}
