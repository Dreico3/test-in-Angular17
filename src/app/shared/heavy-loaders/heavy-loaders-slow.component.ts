import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 style="color:{{color}}">hola mundo</h1>`,
})
export class HeavyLoadersSlowComponent {
  @Input({required:true}) color!:string;
  constructor(){
    console.log("heavyLoader component")
    const start=Date.now();
    while(Date.now()-start<3000){

    }
  }
}
