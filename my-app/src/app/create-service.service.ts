import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from './app.config';
import { lastValueFrom } from 'rxjs';


export class CreateServiceService<T> {

  constructor( private http: HttpClient, private url:string) {
    console.log(this.url);
  }
  create(entity:T):Promise<T> {
    console.log(entity)
    return lastValueFrom(this.http.post<T>(URL_SERVER.toString(), entity))
    //return this.http.post<T>()
  
   }
}
