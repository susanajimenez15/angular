import { HttpClient } from '@angular/common/http';

export class CreateServiceService<T> {

  constructor( private http: HttpClient, private url:string) {
    console.log(this.url);
  }
  //create(entity:T):Observable<T>{
    create(entity:T){
    //return this.http.post<T>(URL_SERVER.toString(), entity)
    //return this.http.post<T>()
    console.log(entity)
   }
}
