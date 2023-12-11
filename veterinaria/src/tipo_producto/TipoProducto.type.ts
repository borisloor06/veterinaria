export interface TipoProducto {
	_id?: string;
	nombre_tp: string;
	detalle_tp: string;
}

export const tipoProductoInitialState: TipoProducto = {
	nombre_tp: "",
	detalle_tp: "",
};
