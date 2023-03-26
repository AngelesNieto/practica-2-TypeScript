"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(Tipo, Numero) {
        this.Tipo = Tipo;
        this.Numero = Numero;
    }
    Telefono.prototype.toString = function () {
        return this.Tipo + ": " + this.Numero;
    };
    return Telefono;
}());
exports.default = Telefono;
