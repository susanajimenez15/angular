import { Component } from '@angular/core';
import { SService } from '../s.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
  providers: [SService]
})
export class BComponent {
  constructor(private s:SService){
    console.log("Component B")
  }
}

