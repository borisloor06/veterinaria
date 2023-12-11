/* eslint-disable no-undef */
const mongoose = require("mongoose");
const {
  connect,
  getDocumentById,
  getAllDocuments,
  insertNewDocument,
  editDocument,
} = require("../../../adapters/MongooseAdapter");
require("dotenv").config();

describe("Adaptador de Base de Datos con Mongoose", () => {
  const TestModel = mongoose.model(
    "Test",
    new mongoose.Schema({ name: String })
  );
  beforeAll(async () => {
    await connect(process.env.dbTest);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("Función getAllDocuments", () => {
    it("debería manejar una colección vacía", async () => {
      const documents = await getAllDocuments(TestModel);

      expect(Array.isArray(documents)).toBe(true);
      expect(documents.length).toBe(0);
    });

    it("debería obtener todos los documentos de una colección existente", async () => {
      await TestModel.create([
        { name: "Documento 1" },
        { name: "Documento 2" },
      ]);

      const documents = await getAllDocuments(TestModel);

      expect(Array.isArray(documents)).toBe(true);
      expect(documents.length).toBe(2);
      expect(documents[0].name).toBe("Documento 1");
      expect(documents[1].name).toBe("Documento 2");
    });
  });

  describe("Función getDocumentById", () => {
    it("debería obtener un documento existente por su ID", async () => {
      const newDocument = new TestModel({ name: "Documento de prueba" });
      await newDocument.save();

      const document = await getDocumentById(TestModel, newDocument._id);

      expect(document).not.toBeNull();
      expect(document.name).toBe("Documento de prueba");
    });
  });

  describe("Función insertNewDocument", () => {
    it("debería insertar un nuevo documento en una colección existente", async () => {
      const documentData = { name: "Nuevo Documento" };

      const result = await insertNewDocument(TestModel, documentData);

      expect(result.name).toBe("Nuevo Documento");
    });
  });

  describe("Función editDocument", () => {
    it("debería editar un documento existente en una colección", async () => {
      const newDocument = await TestModel.create({
        name: "Documento a editar",
      });

      const updatedData = { name: "Documento editado" };

      const updatedDocument = await editDocument(
        TestModel,
        { _id: newDocument._id },
        updatedData
      );

      expect(updatedDocument).not.toBeNull();
      expect(updatedDocument.name).toBe("Documento editado");
    });
  });
});
