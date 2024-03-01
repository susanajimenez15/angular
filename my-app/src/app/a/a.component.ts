import { Component } from '@angular/core';
import { SService } from '../s.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
  providers: [SService]
})
export class AComponent {
  constructor(private s:SService){ 
    
  }


}
