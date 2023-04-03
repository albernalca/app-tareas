import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/models.tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  //Declaro variables
  listaTareas: Tarea[] = []
  nombreTarea= '' 

  constructor(){}

  ngOnInit(): void {
    
  }

  agregarTarea(){
     
    //Creo un objeto tarea


    // agregar el objeto tarea al array

    //Resetiar el input o formulario
  }

}
