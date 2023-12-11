import { Producto, productoInitialState } from "../producto/Producto.type";
import { Proveedor, proveedorInitialState } from "../proveedor/Proveedor.type";
import { Veterinaria, veterinariaInitialState } from "../veterinaria/Veterinaria.type";

export interface Compra {
	_id?: string;
	id_veterinaria: Veterinaria;
	id_producto: Producto;
	id_proveedor: Proveedor;
	fecha_compra: string;
}

export const compraInitialState = {
	id_veterinaria: veterinariaInitialState,
	id_producto: productoInitialState,
	id_proveedor: proveedorInitialState,
	fecha_compra: "",
};
