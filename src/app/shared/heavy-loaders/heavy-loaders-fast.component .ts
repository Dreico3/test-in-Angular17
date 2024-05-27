import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `<section style="background-color:{{color}}">
    <ng-content/>
  </section>`,
})
export class HeavyLoadersFastComponent {
  @Input({required:true}) color!:string; 
  constructor(){
    console.log("heavy loader fast")
  }
}
