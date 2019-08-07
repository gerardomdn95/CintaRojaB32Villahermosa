// Películas

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { router } = require("./routes/routes");
const MONGOURI = require("./config/keys").mongoURI;
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(MONGOURI, { useNewUrlParser: true})
    .then(() => console.log("Conectado a MongoDB 🚀"))
    .catch((err) => console.log(err));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
