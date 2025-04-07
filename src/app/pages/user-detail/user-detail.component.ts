import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  selectedUser: any;

  constructor(private route: ActivatedRoute) {} // Agregar conexión al servicio

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    //Llamar al nuevo getUser
  }

  // Agregar un nuevo método getUser para obtener un usuario por I
}
