import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Veterinaria } from "./Veterinaria.type";

export function useGetVeterinarias(initialState: Veterinaria[]): Veterinaria[] {
	const [veterinaria, setVeterinaria] = useState<Veterinaria[]>(initialState);

	const getVeterinarias = async () => {
		const response = await fetch(`${URL_API}/veterinaria`);
		const data = (await response.json()) as Veterinaria[];

		return data;
	};

	useEffect(() => {
		getVeterinarias()
			.then((data) => {
				setVeterinaria(data);
			})
			.catch(() => {
				setVeterinaria(initialState);
			});
	}, []);

	return veterinaria;
}
