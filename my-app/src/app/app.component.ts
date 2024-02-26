import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Susana Jimenez';
  user = 'user susi';
  array = [1,2,3,4,5];

  handlerClick(event:Event){
    console.log('hola');
    console.log(event);
  }
}
