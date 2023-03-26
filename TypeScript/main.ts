import Direccion from "./Direcion";
import Mail from "./Mail";
import Persona from "./Persona";
import Telefono from "./Telefono";

//#region "Constantes"
const aYearFromNow = new Date();
aYearFromNow.setFullYear(aYearFromNow.getFullYear() -20);

const javier= new Persona('Javier','Perez Lopez',20,'05839274K',aYearFromNow,'verde','varon',
                           Direccion [30]=[ new Direccion('almudena',4,5,'A',28870,'Madrid','Madrid')],
                           Mail[30] =[new Mail('hotmail','j.perezlopez@hotmail.es')],
                           Telefono [30]=[new Telefono('casa',64932015)],'Amigo');

aYearFromNow.setFullYear(aYearFromNow.getFullYear() -10);
const lucas= new Persona('Lucas','Perez Lopez',10,'37540317Ñ',aYearFromNow,'negro','varon',
                           Direccion [30]=[new Direccion('Av.concepcion',14,2,'C',27670,'Lugo','Lugo')],
                           Mail[30] =[new Mail('gmail','l.perezlopez@hotmail.es')],
                           Telefono [30]=[new Telefono('casa',58302157)],'Amigo');

aYearFromNow.setFullYear(aYearFromNow.getFullYear() -22);
const ana= new Persona('Ana','Perez Martin',22,'483027P',aYearFromNow,'verde','mujer',
                           Direccion [30]=[  new Direccion('almudena',2,5,'A',28870,'Madrid','Madrid')], 
                           Mail[30] =[new Mail('Outlock','A.perezmartin@outlock.es')],
                           Telefono [30]=[new Telefono('movil',74214903)],'Amiga');

const array_personas: Persona[ ] = [javier,lucas,ana];
//#endregion

//#region "Salida terminal"
console.log("-------------------------------------------\n");
console.log("Antes de insertar\n");
console.log("-------------------------------------------\n");
recorrerArray(array_personas);

let persona=buscarDni(array_personas,"483027P");
        persona.addDireccion(new Direccion('Av.concepcion',14,2,'C',27670,'Lugo','Lugo'))
        persona.addMail(new Mail('Gmail','A.perezmartin@gmail.es'));
        persona.addTelefono(new Telefono('casa',914387493));

console.log("-------------------------------------------\n");
console.log("Después de insertar\n");
console.log("-------------------------------------------\n");
recorrerArray(array_personas);
//#endregion

//#region "Metodos main"
function buscarDni(array :Persona[], dni:string):Persona{
    let encontrado:Persona;
    array.forEach(element => {
        if(element.getDNI()==dni){
            encontrado=element;
        }
    });
return encontrado
}
function recorrerArray(array:Persona[]){
    array.forEach(element => {
        console.log(element.getDatos());
        console.log("\n");
    });
}
//#endregion