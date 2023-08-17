export class SaludoSimple {
    private static ejemplo = new SaludoSimple();
 
    public static getInstance(){
       return this.ejemplo;
    }
 
    public showSaludo(): string{
       return "Hola Mundo :D";
    }
    public showDespedida(): string{
        return "Adios Mundo :(";
     }
 }