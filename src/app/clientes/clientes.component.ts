import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',

})
export class ClientesComponent {

  clientes: Cliente[]=[
    {id: 1, nombre:'Julian', apellido:'Quimbayo', email:'julian.quimbayo@corhuila.edu.co',createAt:'2024-03-21'},
    {id: 2, nombre:'Carlos', apellido:'Castro', email:'julian.quimbayo@corhuila.edu.co',createAt:'2024-02-21'},
    {id: 3, nombre:'Julian', apellido:'Quimbayo', email:'julian.quimbayo@corhuila.edu.co',createAt:'2024-01-21'},
    {id: 4, nombre:'Julian', apellido:'Quimbayo', email:'julian.quimbayo@corhuila.edu.co',createAt:'2024-03-20'}
  ]

}
