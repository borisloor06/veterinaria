export interface Cliente {
	_id?: string;
	nombre: string;
	apellido: string;
	genero: string;
	direccion: string;
	telefono: string;
	fecha_registro: string;
	ultima_visita: string;
	antiguedad: string;
	ci: string;
	num_mascotas: number;
}

export const clienteInitialState = {
	nombre: "",
	apellido: "",
	genero: "",
	direccion: "",
	telefono: "",
	fecha_registro: new Date().toLocaleString(),
	ultima_visita: new Date().toLocaleString(),
	antiguedad: "",
	ci: "",
	num_mascotas: 0,
};
