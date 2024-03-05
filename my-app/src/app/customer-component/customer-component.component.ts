import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-component',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink  ],
  templateUrl: './customer-component.component.html',
  styleUrl: './customer-component.component.css'
})
export class CustomerComponentComponent {
  
}
