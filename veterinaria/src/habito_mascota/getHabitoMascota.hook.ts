import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { HabitoMascota } from "./HabitoMascota.type";

export function useGetHabitoMascota(initialState: HabitoMascota[]): HabitoMascota[] {
	const [habitoMascota, setHabitoMascota] = useState<HabitoMascota[]>(initialState);

	const getHabitoMascota = async () => {
		const response = await fetch(`${URL_API}/habitosMascota`);
		const data = (await response.json()) as HabitoMascota[];

		return data;
	};

	useEffect(() => {
		getHabitoMascota()
			.then((data) => {
				setHabitoMascota(data);
			})
			.catch(() => {
				setHabitoMascota(initialState);
			});
	}, []);

	return habitoMascota;
}
