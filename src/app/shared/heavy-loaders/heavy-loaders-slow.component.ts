import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `<h1>hola mundo</h1>`,
})
export class HeavyLoadersSlowComponent {

}
