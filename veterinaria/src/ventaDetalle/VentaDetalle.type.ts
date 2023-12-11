export interface VentaDetalle {
	_id?: string;
	detalle_producto: string;
	valor_unitario: number;
	cantidad_venta: number;
	subtotal: number;
	iva: number;
	total: number;
}

export const ventaDetalleInitialState: VentaDetalle = {
	detalle_producto: "",
	valor_unitario: 0,
	cantidad_venta: 0,
	subtotal: 0,
	iva: 0,
	total: 0,
};
