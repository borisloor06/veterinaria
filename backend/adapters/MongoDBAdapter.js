const { MongoClient, ObjectId, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const url = "mongodb://localhost:9000/"; // Cambia la URL y el puerto según tu configuración
const dbName = "veterinaria"; // Reemplaza con el nombre de tu base de datos

let client;

// Función para conectar a MongoDB
async function connect() {
	try {
		client = new MongoClient(process.env["db"], {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});
		await client.connect();
		console.log("Conexión a MongoDB establecida");

		return client;
	} catch (error) {
		console.error("Error al conectar a MongoDB:", error);
		throw error;
	}
}

// Función para obtener una colección
async function getCollection(collectionName) {
	const client = await connect();
	if (!client) {
		throw new Error("La conexión a MongoDB no está establecida");
	}

	return client.db(dbName).collection(collectionName);
}

// Función para obtener un documento por su ID
async function getDocumentById(collectionName, id) {
	try {
		const collection = await getCollection(collectionName);
		const document = await collection.findOne({ _id: new ObjectId(id) });

		return document;
	} catch (error) {
		console.error(`Error al obtener el documento ${id} de ${collectionName}:`, error);
		throw error;
	}
}

// Función para obtener todos los documentos de una colección
async function getAllDocuments(collectionName) {
	try {
		const collection = await getCollection(collectionName);
		const documents = collection.find({}).toArray();

		return documents;
	} catch (error) {
		console.error(`Error al obtener documentos de ${collectionName}:`, error);
		throw error;
	}
}

// Función para insertar un nuevo documento en una colección
async function insertNewDocument(collectionName, document) {
	try {
		const collection = await getCollection(collectionName);
		const result = await collection.insertOne(document);

		return result;
	} catch (error) {
		console.error(`Error al insertar un documento en ${collectionName}:`, error);
		throw error;
	}
}

module.exports = {
	connect,
	getDocumentById,
	getAllDocuments,
	insertNewDocument,
};
