import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Cliente } from "./Cliente.type";

export function useGetClientes(initialState: Cliente[]): Cliente[] {
	const [clientes, setClientes] = useState<Cliente[]>(initialState);

	const getClientes = async () => {
		const response = await fetch(`${URL_API}/clientes`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = (await response.json()) as Cliente[];

		return data;
	};

	useEffect(() => {
		getClientes()
			.then((data) => {
				setClientes(data);
			})
			.catch(() => {
				setClientes(initialState);
			});
	}, []);

	return clientes;
}
