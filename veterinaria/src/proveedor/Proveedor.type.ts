export interface Proveedor {
	_id?: string;
	RUC: string;
	nombre_proveedor: string;
	apellido_proveedor: string;
}

export const proveedorInitialState: Proveedor = {
	RUC: "",
	nombre_proveedor: "",
	apellido_proveedor: "",
};
