import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Veterinario } from "./Veterinario.type";

export function useGetVeterinarios(initialState: Veterinario[]): Veterinario[] {
	const [veterinarios, setVeterinarios] = useState<Veterinario[]>(initialState);

	const getVentas = async () => {
		const response = await fetch(`${URL_API}/veterinarios`);
		const data = (await response.json()) as Veterinario[];

		return data;
	};

	useEffect(() => {
		getVentas()
			.then((data) => {
				setVeterinarios(data);
			})
			.catch(() => {
				setVeterinarios(initialState);
			});
	}, []);

	return veterinarios;
}
