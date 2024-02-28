import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})

export class SignalComponent {
  counter = signal(0);
  
  @HostListener('click',["$event"])
  handlerClick(ev:Event){
    this.counter.update(v => v+1)
  }
}
