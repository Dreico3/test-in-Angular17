import { Component, signal } from '@angular/core';

type Grade = 'a' | 'b' | 'f'
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('a')
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React'])
  public frameworks2 = signal([])
  public toggleContent() {
    this.showContent.update(update => !update)
  }
}
