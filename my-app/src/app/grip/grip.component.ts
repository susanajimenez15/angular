import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-grip',
  standalone: true,
  imports: [],
  templateUrl: './grip.component.html',
  styleUrl: './grip.component.css'
})

export class GripComponent {
  name = 'grip';

}

function* getDays(){
  for(let i=0; i<31;i++){
    yield i+1
  }
}


