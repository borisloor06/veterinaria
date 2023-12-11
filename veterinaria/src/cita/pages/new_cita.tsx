import { ChangeEvent, FormEvent, useState } from "react";

import { useGetClientes } from "../../clientes/getClientes.hook";
import { useGetVeterinarios } from "../../veterinario/getVeterinarios.hook";
import { Cita, citasInitialState } from "../Cita.type";
import { useCrearCita } from "../hooks/useCrearCita";

export function CrearCita() {
	const { crearCita, citaCreada } = useCrearCita();
	const veterinarios = useGetVeterinarios([]);
	const clientes = useGetClientes([]);

	const [nuevaCita, setNuevaCita] = useState<Cita>(citasInitialState);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setNuevaCita({
			...nuevaCita,
			[name]: value,
		});
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		// Aquí puedes usar tu custom hook o una función para enviar la nueva cita al servidor
		crearCita(nuevaCita).catch(() => {
			setNuevaCita(citasInitialState);
		});

		// Limpia el formulario después de enviar la cita
		setNuevaCita(citasInitialState);
	};

	return (
		<div>
			<h2>Crear Nueva Cita</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="veterinario">Veterinario:</label>
					<select
						name="veterinario"
						value={nuevaCita.id_veterinario._id}
						onChange={handleInputChange}
					>
						<option value="">Selecciona un veterinario</option>
						{veterinarios.map((veterinario) => (
							<option key={veterinario._id} value={veterinario._id}>
								{veterinario.nombre}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="cliente">Cliente:</label>
					<select name="cliente" value={nuevaCita.id_cliente._id} onChange={handleInputChange}>
						<option value="">Selecciona un cliente</option>
						{clientes.map((cliente) => (
							<option key={cliente._id} value={cliente._id}>
								{cliente.nombre}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="fecha_programada">Fecha Programada:</label>
					<input
						type="datetime-local"
						name="fecha_programada"
						value={nuevaCita.fecha_programada.toISOString().slice(0, 16)}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit">Crear Cita</button>
			</form>
			{citaCreada && (
				<div>
					<h3>Cita Creada:</h3>
					<p>Veterinario: {citaCreada.id_veterinario.nombre}</p>
					<p>Cliente: {citaCreada.id_cliente.nombre}</p>
					<p>Fecha Programada: {citaCreada.fecha_programada.toISOString()}</p>
				</div>
			)}
		</div>
	);
}
