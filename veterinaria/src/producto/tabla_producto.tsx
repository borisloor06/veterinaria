import { useGetProductos } from "./getProductos.hook";
import { productoInitialState } from "./Producto.type";

export default function TablaProductos() {
	const productos = useGetProductos([productoInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>Nombres</th>
					<th>Tipo Producto</th>
				</thead>
				<tbody>
					{productos.map((producto) => {
						return (
							<tr key={producto._id}>
								<td>{producto.nombre_producto}</td>
								<td>{producto.id_tipo_producto.nombre_tp}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
