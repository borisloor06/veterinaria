const { Router } = require("express");
const rutasCitas = require("./src/cita/cita.routes");
const rutasClientes = require("./src/cliente/cliente.routes");
const rutasCompras = require("./src/compra/compra.routes");
const rutasCompraDetalle = require("./src/compra_detalle/compra_detalle.routes");
const rutasHabitoMascota = require("./src/habito_mascota/habito_mascota.routes");
const rutasMascotas = require("./src/mascota/mascota.routes");
const rutasProductos = require("./src/producto/producto.routes");
const rutasProveedor = require("./src/proveedor/proveedor.routes");
const rutasTipoMascota = require("./src/tipo_mascota/tipo_mascota.routes");
const rutasTipoProducto = require("./src/tipo_producto/tipo_producto.routes");
const rutasVacunas = require("./src/vacuna/vacuna.routes");
const rutasVentas = require("./src/venta/venta.routes");
const rutasVentaDetalle = require("./src/venta_detalle/venta_detalle.routes");
const rutasVeterinaria = require("./src/veterinaria/veterinaria.routes");
const rutasVeterinario = require("./src/veterinario/veterinario.routes");
const { authRoutes } = require("./src/auth/autenticate.routes");

const appRoutes = Router()

appRoutes.use(rutasCitas);
appRoutes.use(rutasClientes);
appRoutes.use(rutasCompras);
appRoutes.use(rutasCompraDetalle);
appRoutes.use(rutasHabitoMascota);
appRoutes.use(rutasMascotas);
appRoutes.use(rutasProductos);
appRoutes.use(rutasProveedor);
appRoutes.use(rutasTipoMascota);
appRoutes.use(rutasTipoProducto);
appRoutes.use(rutasVentas);
appRoutes.use(rutasVacunas);
appRoutes.use(rutasVentaDetalle);
appRoutes.use(rutasVeterinaria);
appRoutes.use(rutasVeterinario);
appRoutes.use(authRoutes);

module.exports = { appRoutes }