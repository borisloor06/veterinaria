const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connect } = require("./adapters/MongooseAdapter");
const { PORT } = require("./constants/server");
const { appRoutes } = require("./server.routes");

const app = express();
app.use(express.json());
app.use(cors());
connect()
app.get("/", (req, res) => {
	res.status(200).json({ message: "Hello from my-express-app!" });
});
app.use(appRoutes)

app.listen(PORT, () => {
	console.log(`Server listening at http://localhost:${PORT}`);
});
