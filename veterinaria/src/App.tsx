import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import RoutesWithNotFound from "./404/RoutesWithNotFound";
import { AuthGuard } from "./auth/guards/auth.guard";
import { NoAuthGuard } from "./auth/guards/noAuth.guard";
import LoginForm from "./auth/pages/LoginFrom";
import RegisterForm from "./auth/pages/RegisterForm";
import { routes } from "./constants/routes";
import Dashboard from "./dashboard/components/dashboard";
import { HomePage } from "./home/homePage";
import { Layout } from "./home/Layout";
import store from "./redux/store";
import SalaEspera from "./SalasEspera/Components/SalaEspera";

const TablaCitas = lazy(() => import("./cita/pages/tabla_citas"));
const TablaClientes = lazy(() => import("./clientes/tabla_clientes"));
const TablaCompra = lazy(() => import("./compra/tabla_compra"));
const TablaCompraDetalles = lazy(() => import("./compra_detalle/tabla_compraDetalle"));
const TablaHabitosMascotas = lazy(() => import("./habito_mascota/tabla_habitoMascota"));
const TablaMascotas = lazy(() => import("./mascota/tabla_mascota"));
const TablaProductos = lazy(() => import("./producto/tabla_producto"));
const TablaProveedores = lazy(() => import("./proveedor/tabla_proveedores"));
const TablaTipoMascota = lazy(() => import("./tipo_mascota/tabla_tipoMascota"));
const TablaTipoProducto = lazy(() => import("./tipo_producto/tabla_tipoProducto"));
const TablaVacunas = lazy(() => import("./vacuna/tabla_vacuna"));
const TablaVentas = lazy(() => import("./venta/tabla_venta"));
const TablaVentasDetalle = lazy(() => import("./ventaDetalle/tabla_ventaDetalle"));
const TablaVeterinaria = lazy(() => import("./veterinaria/tabla_veterinaria"));
const TablaVeterinario = lazy(() => import("./veterinario/tabla_veterinario"));

export function App() {
	return (
		<Suspense fallback={<>Cargando...</>}>
			<Provider store={store}>
				<BrowserRouter>
					<RoutesWithNotFound>
						<Route element={<AuthGuard />}>
							<Route element={<Layout />}>
								<Route path={routes.dashboard} element={<Dashboard />} />
								<Route path={routes.citas} element={<TablaCitas />} />
								<Route path={routes.clientes} element={<TablaClientes />} />
								<Route path={routes.compras} element={<TablaCompra />} />
								<Route path={routes.detalle_compras} element={<TablaCompraDetalles />} />
								<Route path={routes.habitos_mascota} element={<TablaHabitosMascotas />} />
								<Route path={routes.mascotas} element={<TablaMascotas />} />
								<Route path={routes.productos} element={<TablaProductos />} />
								<Route path={routes.proveedores} element={<TablaProveedores />} />
								<Route path={routes.tipo_mascota} element={<TablaTipoMascota />} />
								<Route path={routes.tipo_producto} element={<TablaTipoProducto />} />
								<Route path={routes.vacunas} element={<TablaVacunas />} />
								<Route path={routes.ventas} element={<TablaVentas />} />
								<Route path={routes.detalle_ventas} element={<TablaVentasDetalle />} />
								<Route path={routes.veterinaria} element={<TablaVeterinaria />} />
								<Route path={routes.veterinario} element={<TablaVeterinario />} />
								<Route path={routes.rooms} element={<SalaEspera />} />
							</Route>
						</Route>
						<Route element={<NoAuthGuard />}>
							<Route path={routes.home} element={<Layout />}>
								<Route path={routes.home} element={<HomePage />} />
								<Route path={routes.login} element={<LoginForm />} />
								<Route path={routes.register} element={<RegisterForm />} />
							</Route>
						</Route>
					</RoutesWithNotFound>
				</BrowserRouter>
			</Provider>
		</Suspense>
	);
}
