export interface Veterinario {
	_id?: string;
	id_veterinaria: string;
	nombre_veterinaria: string;
	nombre: string;
	apellido: string;
}

export const veterinarioInitialState = {
	id_veterinaria: "",
	nombre_veterinaria: "",
	nombre: "",
	apellido: "",
};
