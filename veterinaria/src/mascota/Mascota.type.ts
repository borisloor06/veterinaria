import { Cliente, clienteInitialState } from "../clientes/Cliente.type";
import { HabitoMascota, habitoMascotaInitialState } from "../habito_mascota/HabitoMascota.type";
import { TipoMascota, tipoMascotaInitialState } from "../tipo_mascota/TipoMascota.type";

export interface Mascota {
	_id?: string;
	id_cliente: Cliente;
	id_tipo_mascota: TipoMascota;
	id_habito: HabitoMascota;
	nombre_mascota: string;
	fecha_nacimiento: string;
	genero: string;
	color: string;
	esterilizacion: string;
}

export const mascotaInitialState = {
	id_cliente: clienteInitialState,
	id_tipo_mascota: tipoMascotaInitialState,
	id_habito: habitoMascotaInitialState,
	nombre_mascota: "",
	fecha_nacimiento: new Date().toLocaleString(),
	genero: "",
	color: "",
	esterilizacion: "",
};
