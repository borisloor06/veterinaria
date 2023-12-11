const {
  getAllDocuments,
  insertNewDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { Veterinaria } = require("./veterinaria.model");

const getVeterinarias = async (req, res) => {
  try {
    const veterinarias = await getAllDocuments(Veterinaria);
    res.status(200).json(veterinarias);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getVeterinaria = async (req, res) => {
  const { id } = req.params;
  try {
    const veterinaria = await getDocumentById(Veterinaria, id);
    res.status(200).json(veterinaria);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newVeterinaria = async (req, res) => {
  const { nombre, direccion } = req.body;
  try {
    const data = await insertNewDocument(Veterinaria, {
      nombre,
      direccion,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editVeterinaria = async (req, res) => {
  const { nombre, direccion } = req.body;
  const { id } = req.params;
  try {
    const data = await insertNewDocument(
      Veterinaria,
      { _id: id },
      {
        nombre,
        direccion,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getVeterinarias,
  newVeterinaria,
  editVeterinaria,
  getVeterinaria,
};
