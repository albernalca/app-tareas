export class Tarea{
    //creo atributos
    nombreTarea: string
    estado: boolean

    //creo constructor para iterar los atributos    
    constructor(nombreTarea: string, estado: boolean){
  
        this.nombreTarea = nombreTarea
        this.estado = estado
    }
}