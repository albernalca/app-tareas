import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/models.tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  //Declaro variables
  listaTarea: Tarea[] = []
  nombreTarea= '' 
  constructor(){
  
  }

  ngOnInit(): void {
    
  }

  //Creo metodo
  agregarTarea(){
     
    //Creo un objeto tarea
    const tarea: Tarea= {
      nombre: this.nombreTarea,
      estado: false
    }

    // agregar el objeto tarea al array
    this.listaTarea.push(tarea)

    //Resetiar el input o formulario
    this.nombreTarea = ''
  }

  //Creo metodo para eliminar.
  eliminarTarea(index: number): void{
    this.listaTarea.splice(index, 1)
  }

}
