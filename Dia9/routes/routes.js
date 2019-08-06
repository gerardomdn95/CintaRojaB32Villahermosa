const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({response: "Corriendo desde routes"});
});

module.exports = { router };