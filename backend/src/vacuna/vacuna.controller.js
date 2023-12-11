const {
  getAllDocuments,
  insertNewDocument,
  editDocument,
  getDocumentById,
} = require("../../adapters/MongooseAdapter");
const { Vacuna } = require("./vacuna.model");

const getVacunas = async (req, res) => {
  try {
    const vacunas = await getAllDocuments(Vacuna);
    res.status(200).json(vacunas);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const getVacuna = async (req, res) => {
  const { id } = req.params;
  try {
    const vacuna = await getDocumentById(Vacuna, id);
    res.status(200).json(vacuna);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newVacuna = async (req, res) => {
  const { id_mascota, id_veterinario, id_producto, fecha_aplicacion, dosis } =
    req.body;
  try {
    const data = await insertNewDocument(Vacuna, {
      id_mascota,
      id_veterinario,
      id_producto,
      fecha_aplicacion,
      dosis,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

const editVacuna = async (req, res) => {
  const { id_mascota, id_veterinario, id_producto, fecha_aplicacion, dosis } =
    req.body;
  const { id } = req.params;
  try {
    const data = await editDocument(
      Vacuna,
      { _id: id },
      {
        id_mascota,
        id_veterinario,
        id_producto,
        fecha_aplicacion,
        dosis,
      }
    );
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getVacunas,
  newVacuna,
  editVacuna,
  getVacuna,
};
