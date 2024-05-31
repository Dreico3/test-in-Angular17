import { Injectable, signal } from '@angular/core';
import { User } from '@inteface/req-response';
interface State{
  users:User[]
  loading:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //el numeral vuelve a la propiedad en privado pero lo hace privado en emacscrip
  //un nivel de privado mas privado
  #state = signal<State>(
    {
      loading:true,
      users:[],
    }
  )
  constructor() { 
    console.log("cargando data ...")
  }
}
