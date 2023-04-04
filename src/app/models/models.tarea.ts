export class Tarea{
    //creo atributos
    nombre: string
    estado: boolean

    //creo constructor para iterar los atributos    
    constructor(nombreTarea: string, estado: boolean){
  
        this.nombre = nombreTarea
        this.estado = estado
    }
}