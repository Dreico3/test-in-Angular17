import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@inteface/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export default class UserComponent {
  private route = inject(ActivatedRoute)
  private userService = inject(UsersService)
  //public user = signal<User|undefined>(undefined)
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  )
  public completeName= computed(()=>{
    if(this.user()){
      return this.user()?.first_name + " " + this.user()?.last_name
    }else return "imformacion del usuario"
  })

  /* constructor(){
    this.route.params.subscribe(params=>{
      console.log(params)
    })
  } */
}
