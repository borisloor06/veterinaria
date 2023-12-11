const {
  getAllDocuments,
  insertNewDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { HabitoMascota } = require("./habito_mascota.model");

const getHabitosMascota = async (req, res) => {
  try {
    const habitos_mascota = await getAllDocuments(HabitoMascota);
    res.status(200).json(habitos_mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getHabitoMascota = async (req, res) => {
  const { id } = req.params
  try {
    const habito_mascota = await getDocumentById(HabitoMascota, id);
    res.status(200).json(habito_mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newHabitoMascota = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const habito_mascota = await insertNewDocument(HabitoMascota, {
      descripcion,
    });
    res.status(200).json(habito_mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editHabitoMascota = async (req, res) => {
  const { descripcion } = req.body;
  const { id } = req.params;
  try {
    const habito_mascota = await editHabitoMascota(
      HabitoMascota,
      { _id: id },
      {
        descripcion,
      }
    );
    res.status(200).json(habito_mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getHabitosMascota,
  newHabitoMascota,
  editHabitoMascota,
  getHabitoMascota,
};
