export default class Mail {
    private Tipo: string;
    private Direccion: string;
    constructor(Tipo : string, Direccion:string){
        this.Tipo=Tipo;
        this.Direccion=Direccion;
    }
    toString():string{
        return this.Direccion+ ", de tipo "+this.Tipo;
    }
}