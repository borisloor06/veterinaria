import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { TipoMascota } from "./TipoMascota.type";

export function useGetTipoMascotas(initialState: TipoMascota[]): TipoMascota[] {
	const [tipoMascota, setTipoMascota] = useState<TipoMascota[]>(initialState);

	const getTipoMascotas = async () => {
		const response = await fetch(`${URL_API}/tipoMascota`);
		const data = (await response.json()) as TipoMascota[];

		return data;
	};

	useEffect(() => {
		getTipoMascotas()
			.then((data) => {
				setTipoMascota(data);
			})
			.catch(() => {
				setTipoMascota(initialState);
			});
	}, []);

	return tipoMascota;
}
