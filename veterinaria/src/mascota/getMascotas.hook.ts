import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Mascota } from "./Mascota.type";

export function useGetMascotas(initialState: Mascota[]): Mascota[] {
	const [mascotas, setMascotas] = useState<Mascota[]>(initialState);

	const getMascotas = async () => {
		const response = await fetch(`${URL_API}/mascotas`);
		const data = (await response.json()) as Mascota[];

		return data;
	};

	useEffect(() => {
		getMascotas()
			.then((data) => {
				setMascotas(data);
			})
			.catch(() => {
				setMascotas(initialState);
			});
	}, []);

	return mascotas;
}
