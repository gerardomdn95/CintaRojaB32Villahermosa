// Películas

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { router } = require("./src/routes/routes");
const MONGOURI = require("./config/keys").mongoURI;
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.all('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(MONGOURI, { useNewUrlParser: true })
    .then(() => console.log("Conectado a MongoDB 🚀"))
    .catch((err) => console.log(err));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
