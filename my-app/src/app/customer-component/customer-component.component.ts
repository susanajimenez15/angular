import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer-component',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink ],
  templateUrl: './customer-component.component.html',
  styleUrl: './customer-component.component.css'
})
export class CustomerComponentComponent {

  /*
  constructor(route: RouterLink){
    this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );
  }
  */
}
