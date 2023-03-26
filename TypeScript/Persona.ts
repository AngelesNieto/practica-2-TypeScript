import Direccion from "./Direcion";
import Mail from "./Mail";
import Telefono from "./Telefono";

export default class Persona {
    private Nombre: string;
    private Appellidos: string;
    private Edad: number;
    private DNI: string;
    private Cumpleaños: Date;
    private ColorFavorito: string;
    private Sexo: string;
    private Direcciones: Direccion[];
    private Mails: Mail[];
    private Telefonos: Telefono[];
    private Nota: string;

    constructor(   Nombre: string,Appellidos: string,Edad: number,DNI: string,Cumpleaños: Date, ColorFavorito: string,
         Sexo: string,Direcciones: Direccion[],Mails: Mail[],Telefonos: Telefono[],Nota: string){
        this.Nombre= Nombre;
        this.Appellidos= Appellidos;
        this.Edad=Edad;
        this.DNI=DNI;
        this.Cumpleaños=Cumpleaños;
        this.ColorFavorito=ColorFavorito;
        this.Sexo=Sexo;
        this.Direcciones=Direcciones;
        this.Mails=Mails;
        this.Telefonos=Telefonos;
        this.Nota=Nota;
    }

    getDatos(): string {
        var result="Nombre= " +this.Nombre+",\nApellidos= "+ this.Nombre + ",\nEdad= " + this.Edad+",\nDNI= "+this.DNI+ ",\nCumpleaños= "+this.Cumpleaños+
        ",\nColor favorito= "+ this.ColorFavorito+ ",\nSexo= "+this.Sexo+",\nDireciones= "
        this.Direcciones.forEach(element => {
          result= result+ "\n "+element.toString()
        });
        result=result+",\nMails= ";
        this.Mails.forEach(element => {
            result= result+ "\n "+element.toString()
          });
        result=result+",\nTelefonos= ";
        this.Telefonos.forEach(element => {
            result= result+ "\n "+element.toString()
          });
          result=result+"\nNota= "+this.Nota;
        return result;
    
    }
    addDireccion(direccion: Direccion){
        this.Direcciones.push(direccion);
    }
    addMail(mail: Mail){
        this.Mails.push(mail);
    }
    addTelefono(telefono: Telefono){
        this.Telefonos.push(telefono);
    }
    getDNI():string{
        return this.DNI
    }
}

