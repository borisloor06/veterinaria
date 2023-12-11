// A A A
// TODO HACER UN TEST PARA EL GET QUE ENCUENTRE UN CAMPO DE CITAS
// TODO HACER UN TEST PARA LA INSERCION DE DATOS

const MongoDbAdapter = require("../../../adapters/MongoDBAdapter");
const { getVentas } = require("../../../src/venta/venta.controller");

// TODO COPIAR LOS TESTS UNA VEZ FUNCIONEN Y CAMBIAR POR LAS NECESIDADES DE CADA ENTIDAD
describe("Pruebas de los controladores de venta", () => {
	const OLD_ENV = process.env;

	beforeEach(() => {
		jest.resetModules();
		process.env = { ...OLD_ENV };
	});

	afterAll(() => {
		process.env = OLD_ENV;
	});

	it("Debe llamar la correcta colección de ventas", async () => {
		const mMemberRecord = [];
		const reqMock = {};
		const resMock = { status: jest.fn().mockReturnThis(), json: jest.fn() };

		jest.spyOn(MongoDbAdapter, "getAllDocuments").mockResolvedValueOnce(mMemberRecord);
		await getVentas(reqMock, resMock);
		expect(MongoDbAdapter.getAllDocuments).toBeCalledWith("ventas");
		expect(resMock.status).toBeCalledWith(200);
	});
});
