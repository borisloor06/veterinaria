import { Mascota, mascotaInitialState } from "../mascota/Mascota.type";
import { Producto, productoInitialState } from "../producto/Producto.type";
import { Veterinario, veterinarioInitialState } from "../veterinario/Veterinario.type";

export interface Vacuna {
	_id?: string;
	id_mascota: Mascota;
	id_veterinario: Veterinario;
	id_producto: Producto;
	fecha_aplicacion: string;
	dosis: string;
}

export const vacunaInitialState = {
	id_mascota: mascotaInitialState,
	id_veterinario: veterinarioInitialState,
	id_producto: productoInitialState,
	fecha_aplicacion: "",
	dosis: "",
};
