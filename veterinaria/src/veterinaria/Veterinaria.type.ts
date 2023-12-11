export interface Veterinaria {
	_id?: string;
	nombre_veterinaria: string;
	direccion: string;
}

export const veterinariaInitialState: Veterinaria = {
	nombre_veterinaria: "",
	direccion: "",
};
