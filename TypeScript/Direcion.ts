export default class Direccion {
   private Calle: string;
   private Numero: number;
   private Piso: number;
   private Letra: string;
   private Cod_Postal: number;
   private Poblacion: string;
   private Provincia: string;

    constructor( Calle: string, Numero: number,Piso: number,Letra: string,Cod_Postal: number,Poblacion: string,Provincia: string){
        this.Calle= Calle;
        this.Numero=Numero;
        this.Piso=Piso;
        this.Letra=Letra;
        this.Cod_Postal=Cod_Postal;
        this.Poblacion=Poblacion;
        this.Provincia=Provincia;
    }
  
    toString():string{
        return this.Calle +","+this.Numero+" Piso "+this.Piso+this.Letra+ ", Cod.Postal "+ this.Cod_Postal +", "+this.Poblacion+ ", "+this.Provincia
    }
}