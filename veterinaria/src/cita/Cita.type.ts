import { Cliente, clienteInitialState } from "../clientes/Cliente.type";
import { Veterinario, veterinarioInitialState } from "../veterinario/Veterinario.type";

export interface Cita {
	_id?: string;
	id_veterinario: Veterinario;
	id_cliente: Cliente;
	fecha_programada: string;
}

export const citasInitialState = {
	id_veterinario: veterinarioInitialState,
	id_cliente: clienteInitialState,
	fecha_programada: new Date().toLocaleString(),
};
