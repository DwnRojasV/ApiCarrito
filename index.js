const express = require("express");
const cors = require("cors");
const body_parse = require("body-parse")
const path = require("path");
const carritoService = require("./carritoService.js");

const app = express();
const port = 8084;

app.use(cors());
app.use(body_parse.json());

const pathName = "/"



app.listen(port,
    ()=>{
        console.log("Se subio la app carrito en el puerto" + port);
    }
    );