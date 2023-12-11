import { useState } from "react";

import { URL_API } from "../../constants/constantes";
import { Cita } from "../Cita.type";

export function useCrearCita(): {
	crearCita: (nuevaCita: Cita) => Promise<void>;
	citaCreada: Cita | null;
} {
	const [citaCreada, setCitaCreada] = useState<Cita | null>(null);

	const crearCita = async (nuevaCita: Cita) => {
		try {
			const response = await fetch(`${URL_API}/citas`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(nuevaCita),
			});

			if (response.ok) {
				const data = (await response.json()) as Cita;
				setCitaCreada(data);
			} else {
				console.error("Error al crear la cita");
			}
		} catch (error) {
			console.error("Error al crear la cita", error);
		}
	};

	return { crearCita, citaCreada };
}
