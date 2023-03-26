export default class Telefono {
   private Tipo: string;
   private Numero: number;
   
   constructor(Tipo : string, Numero:number){
    this.Tipo=Tipo;
    this.Numero=Numero;
}
toString():string{
    return this.Tipo+": "+ this.Numero ;
}
}