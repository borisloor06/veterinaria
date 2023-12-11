import { TipoProducto, tipoProductoInitialState } from "../tipo_producto/TipoProducto.type";

export interface Producto {
	_id?: string;
	id_tipo_producto: TipoProducto;
	nombre_producto: string;
}

export const productoInitialState = {
	nombre_producto: "",
	id_tipo_producto: tipoProductoInitialState,
};
