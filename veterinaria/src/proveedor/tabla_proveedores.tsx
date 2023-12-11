import { useGetProveedor } from "./getProveedores.hook";
import { proveedorInitialState } from "./Proveedor.type";

export default function TablaProveedores() {
	const proveedores = useGetProveedor([proveedorInitialState]);

	return (
		<>
			<table className="table">
				<thead>
					<th>RUC</th>
					<th>Nombre</th>
					<th>Apellido</th>
				</thead>
				<tbody>
					{proveedores.map((proveedor) => {
						return (
							<tr key={proveedor._id}>
								<td>{proveedor.RUC}</td>
								<td>{proveedor.nombre_proveedor}</td>
								<td>{proveedor.apellido_proveedor}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
