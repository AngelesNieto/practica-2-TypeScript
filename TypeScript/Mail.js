"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mail = /** @class */ (function () {
    function Mail(Tipo, Direccion) {
        this.Tipo = Tipo;
        this.Direccion = Direccion;
    }
    Mail.prototype.toString = function () {
        return this.Direccion + ", de tipo " + this.Tipo;
    };
    return Mail;
}());
exports.default = Mail;
