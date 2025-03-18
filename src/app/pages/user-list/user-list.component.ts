import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent { // Implementar OnInit
  constructor(public userService: UserService) {} // Conexión con el servicio
 
  // Método ngOnInit

  //Función getUsers() para obtener los usuarios del API
  

  //Función deleteUser() para eliminar un usuario del API a través de su ID

}
