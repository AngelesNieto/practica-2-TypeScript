"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion = /** @class */ (function () {
    function Direccion(Calle, Numero, Piso, Letra, Cod_Postal, Poblacion, Provincia) {
        this.Calle = Calle;
        this.Numero = Numero;
        this.Piso = Piso;
        this.Letra = Letra;
        this.Cod_Postal = Cod_Postal;
        this.Poblacion = Poblacion;
        this.Provincia = Provincia;
    }
    Direccion.prototype.toString = function () {
        return this.Calle + "," + this.Numero + " Piso " + this.Piso + this.Letra + ", Cod.Postal " + this.Cod_Postal + ", " + this.Poblacion + ", " + this.Provincia;
    };
    return Direccion;
}());
exports.default = Direccion;
