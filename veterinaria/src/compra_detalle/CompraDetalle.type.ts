export interface CompraDetalle {
	_id?: string;
	detalle_producto: string;
	valor_unitario: number;
	cantidad_producto: number;
	subtotal: number;
	iva: number;
	total: number;
}

export const compraDetalleInitialState: CompraDetalle = {
	detalle_producto: "",
	valor_unitario: 0,
	cantidad_producto: 0,
	subtotal: 0,
	iva: 0,
	total: 0,
};
