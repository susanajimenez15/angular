import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { URL_SERVER } from './app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CreateServiceService<T> {

  constructor( private http: HttpClient ) {
    
  }
  create(entity:T):Observable<T>{
    return this.http.post<T>(URL_SERVER.toString(), entity)
    //return this.http.post<T>()
    console.log(entity)
   }
}
