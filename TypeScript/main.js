"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direcion_1 = require("./Direcion");
var Mail_1 = require("./Mail");
var Persona_1 = require("./Persona");
var Telefono_1 = require("./Telefono");
//#region "Constantes"
var aYearFromNow = new Date();
aYearFromNow.setFullYear(aYearFromNow.getFullYear() - 20);
var javier = new Persona_1.default('Javier', 'Perez Lopez', 20, '05839274K', aYearFromNow, 'verde', 'varon', Direcion_1.default[30] = [new Direcion_1.default('almudena', 4, 5, 'A', 28870, 'Madrid', 'Madrid')], Mail_1.default[30] = [new Mail_1.default('hotmail', 'j.perezlopez@hotmail.es')], Telefono_1.default[30] = [new Telefono_1.default('casa', 64932015)], 'Amigo');
aYearFromNow.setFullYear(aYearFromNow.getFullYear() - 10);
var lucas = new Persona_1.default('Lucas', 'Perez Lopez', 10, '37540317Ñ', aYearFromNow, 'negro', 'varon', Direcion_1.default[30] = [new Direcion_1.default('Av.concepcion', 14, 2, 'C', 27670, 'Lugo', 'Lugo')], Mail_1.default[30] = [new Mail_1.default('gmail', 'l.perezlopez@hotmail.es')], Telefono_1.default[30] = [new Telefono_1.default('casa', 58302157)], 'Amigo');
aYearFromNow.setFullYear(aYearFromNow.getFullYear() - 22);
var ana = new Persona_1.default('Ana', 'Perez Martin', 22, '483027P', aYearFromNow, 'verde', 'mujer', Direcion_1.default[30] = [new Direcion_1.default('almudena', 2, 5, 'A', 28870, 'Madrid', 'Madrid')], Mail_1.default[30] = [new Mail_1.default('Outlock', 'A.perezmartin@outlock.es')], Telefono_1.default[30] = [new Telefono_1.default('movil', 74214903)], 'Amiga');
var array_personas = [javier, lucas, ana];
//#endregion
//#region "Salida terminal"
console.log("-------------------------------------------\n");
console.log("Antes de insertar\n");
console.log("-------------------------------------------\n");
recorrerArray(array_personas);
var persona = buscarDni(array_personas, "483027P");
persona.addDireccion(new Direcion_1.default('Av.concepcion', 14, 2, 'C', 27670, 'Lugo', 'Lugo'));
persona.addMail(new Mail_1.default('Gmail', 'A.perezmartin@gmail.es'));
persona.addTelefono(new Telefono_1.default('casa', 914387493));
console.log("-------------------------------------------\n");
console.log("Después de insertar\n");
console.log("-------------------------------------------\n");
recorrerArray(array_personas);
//#endregion
//#region "Metodos main"
function buscarDni(array, dni) {
    var encontrado;
    array.forEach(function (element) {
        if (element.getDNI() == dni) {
            encontrado = element;
        }
    });
    return encontrado;
}
function recorrerArray(array) {
    array.forEach(function (element) {
        console.log(element.getDatos());
        console.log("\n");
    });
}
//#endregion
