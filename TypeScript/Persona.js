"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(Nombre, Appellidos, Edad, DNI, Cumpleaños, ColorFavorito, Sexo, Direcciones, Mails, Telefonos, Nota) {
        this.Nombre = Nombre;
        this.Appellidos = Appellidos;
        this.Edad = Edad;
        this.DNI = DNI;
        this.Cumpleaños = Cumpleaños;
        this.ColorFavorito = ColorFavorito;
        this.Sexo = Sexo;
        this.Direcciones = Direcciones;
        this.Mails = Mails;
        this.Telefonos = Telefonos;
        this.Nota = Nota;
    }
    Persona.prototype.getDatos = function () {
        var result = "Nombre= " + this.Nombre + ",\nApellidos= " + this.Nombre + ",\nEdad= " + this.Edad + ",\nDNI= " + this.DNI + ",\nCumpleaños= " + this.Cumpleaños +
            ",\nColor favorito= " + this.ColorFavorito + ",\nSexo= " + this.Sexo + ",\nDireciones= ";
        this.Direcciones.forEach(function (element) {
            result = result + "\n " + element.toString();
        });
        result = result + ",\nMails= ";
        this.Mails.forEach(function (element) {
            result = result + "\n " + element.toString();
        });
        result = result + ",\nTelefonos= ";
        this.Telefonos.forEach(function (element) {
            result = result + "\n " + element.toString();
        });
        result = result + "\nNota= " + this.Nota;
        return result;
    };
    Persona.prototype.addDireccion = function (direccion) {
        this.Direcciones.push(direccion);
    };
    Persona.prototype.addMail = function (mail) {
        this.Mails.push(mail);
    };
    Persona.prototype.addTelefono = function (telefono) {
        this.Telefonos.push(telefono);
    };
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    return Persona;
}());
exports.default = Persona;
