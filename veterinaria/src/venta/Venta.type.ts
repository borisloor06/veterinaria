import { Cliente, clienteInitialState } from "../clientes/Cliente.type";
import { Producto, productoInitialState } from "../producto/Producto.type";
import { VentaDetalle, ventaDetalleInitialState } from "../ventaDetalle/VentaDetalle.type";
import { Veterinaria, veterinariaInitialState } from "../veterinaria/Veterinaria.type";

export interface Venta {
	_id?: string;
	id_veterinaria: Veterinaria;
	id_cliente: Cliente;
	id_producto: Producto;
	id_venta_detalle: VentaDetalle;
	fecha_venta: string;
	descripcion: string;
}

export const ventaInitialState = {
	id_veterinaria: veterinariaInitialState,
	id_cliente: clienteInitialState,
	id_producto: productoInitialState,
	id_venta_detalle: ventaDetalleInitialState,
	fecha_venta: new Date().toLocaleString(),
	descripcion: "",
};
