import { ComponentFactoryResolver, Inject, Injectable } from '@angular/core';
import { URL_SERVER } from './app.config';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class SService {

  constructor(@Inject(URL_SERVER) servidor: string) {
    console.log('servidor');
    console.log(servidor);
   }
}
