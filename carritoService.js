
let carritos = require("./carritos.json");
let request = require("axios");

const carritosGet = ()=>{
    return carritos;
};

const setEstadoCarritoExport = (carritoPago) => {

    for(let i = 0; i< carritos.length; i++ ){
        if(carritos[i].id === carritoPago.idCarrito){

        }
    }
}