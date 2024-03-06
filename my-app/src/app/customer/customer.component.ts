import { Component, Inject } from '@angular/core';
import { CreateServiceService } from '../create-service.service';
import { HttpClient } from '@angular/common/http';
import { URL } from '../app.config';
import { CreateUrl } from '../utils';
import { lastValueFrom } from 'rxjs';
import { Spinner } from '../spinner';

const PATH = '/customer'

interface Request{
  id:number,
  name:string,
  phone:string
}

export interface ISpinner {
  on():void;
  off():void;
}

const service = (path:string)=>{
  return (http:HttpClient,url:URL)=>{      
    return new CreateServiceService<Request>(http, CreateUrl(url,path))
  }
}

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers:[
    {
      provide:CreateServiceService<Request>,
      useFactory:service(PATH)
    }
  ]
})



export class CustomerComponent implements ISpinner{
  constructor(private service:CreateServiceService<Request> ){
    this.create();
  }
  on(): void {
    console.log('on')
  }
  off(): void {
    console.log('off')
  }

  @Spinner()
  private async create(){
    const result = await this.service.create({id:1,name:"susana jimenez", phone:"666789999"})
    
    /*
    Esto es qeuivalente a no poner el spinner
    try{
      // spinner on -> para indicar al usuario que esa esperando
      const result = await lastValueFrom(this.service.create({id:1,name:"susana jimenez", phone:"666789999"}))
    }
    catch (err) {

    }
    finally{
      // spinner off
    }*/
  }

}

