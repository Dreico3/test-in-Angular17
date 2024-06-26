import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@inteface/req-response';
import { delay, map } from 'rxjs';
interface State {
  users: User[]
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //el numeral vuelve a la propiedad en privado pero lo hace privado en emacscrip
  //un nivel de privado mas privado
  private http = inject(HttpClient)
  #state = signal<State>(
    {
      loading: true,
      users: [],
    }
  )
  public users = computed(() => this.#state().users)
  constructor() {
    console.log("cargando data ...")
    this.http.get<UsersResponse>("https://reqres.in/api/users")
      .pipe(delay(1500))
      .subscribe(res => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      })
  }
  getUserById(id:string){
   return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1500),
      map(res=>{
        console.log(res)
        return res.data 
      })
    )
  }
}
