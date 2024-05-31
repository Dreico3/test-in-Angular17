import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent {
  public userServise = inject(UsersService)
}
