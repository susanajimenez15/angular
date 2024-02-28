import { Component, HostListener } from '@angular/core';
import { DayComponent } from '../day/day.component';

function* getDays(){
  for(let i=0; i<31;i++){
    yield i+1
  }
}

@Component({
  selector: 'app-grip',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './grip.component.html',
  styleUrl: './grip.component.css'
})

export class GripComponent {
  name = 'grip';
  days=[...getDays()]

  @HostListener('click',["$event"])
  handlerDay(ev:Event){
    const node = (ev.composedPath() as HTMLElement[])
          .find(n=>n.dataset && 'day' in n.dataset)
    if(node){
      const {day} = node.dataset;
      console.log(day)
    }
  }
}





