import { useEffect, useState } from "react";

import { URL_API } from "../constants/constantes";
import { Vacuna } from "./Vacuna.type";

export function useGetVacunas(initialState: Vacuna[]): Vacuna[] {
	const [vacunas, setVacunas] = useState<Vacuna[]>(initialState);

	const getVacunas = async () => {
		const response = await fetch(`${URL_API}/vacunas`);
		const data = (await response.json()) as Vacuna[];

		return data;
	};

	useEffect(() => {
		getVacunas()
			.then((data) => {
				setVacunas(data);
			})
			.catch(() => {
				setVacunas(initialState);
			});
	}, []);

	return vacunas;
}
