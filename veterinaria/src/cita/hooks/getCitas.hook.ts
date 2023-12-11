import { useEffect, useState } from "react";

import { URL_API } from "../../constants/constantes";
import { Cita } from "../Cita.type";

export function useGetCitas(initialState: Cita[]): Cita[] {
	const [citas, setCitas] = useState<Cita[]>(initialState);

	const getCitas = async (): Promise<Cita[]> => {
		const response = await fetch(`${URL_API}/citas`);
		const data = (await response.json()) as Cita[];

		return data;
	};

	useEffect(() => {
		getCitas()
			.then((data) => {
				setCitas(data);
			})
			.catch(() => {
				setCitas(initialState);
			});
	}, []);

	return citas;
}
