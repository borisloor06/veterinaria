const mongoose = require("mongoose");
require("dotenv").config();


const DEFAULT_URL = process.env.db;
// Función para conectar a la base de datos de Mongoose
async function connect(MONGO_URL = DEFAULT_URL) {
	console.log(MONGO_URL)
	try {
		await mongoose.connect(MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Conexión a la base de datos de Mongoose establecida");
	} catch (error) {
		console.error("Error al conectar a la base de datos de Mongoose:", error);
		throw error;
	}
}

// Función para obtener un documento por su ID
async function getDocumentById(Model, id) {
	try {
		const document = await Model.findById(id);

		return document;
	} catch (error) {
		console.error(`Error al obtener el documento ${id}:`, error);
		throw error;
	}
}

// Función para obtener todos los documentos de una colección
async function getAllDocuments(Model) {
	try {
		const documents = await Model.find({});

		return documents;
	} catch (error) {
		console.error(`Error al obtener documentos:`, error);
		throw error;
	}
}

// Función para insertar un nuevo documento en una colección
async function insertNewDocument(Model, documentData) {
	try {
		const document = new Model(documentData);
		const result = await document.save();

		return result;
	} catch (error) {
		console.error(`Error al insertar un documento:`, error);
		throw error;
	}
}

async function editDocument(Model, filter, documentData) {
	try {
		const document = await Model.findOneAndUpdate(filter, documentData, {
			new: true
		});

		return document;
	} catch (error) {
		console.error(`Error al insertar un documento:`, error);
		throw error;
	}
}

module.exports = {
	connect,
	getDocumentById,
	getAllDocuments,
	insertNewDocument,
	editDocument
};
