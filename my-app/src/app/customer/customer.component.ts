import { Component, Inject } from '@angular/core';
import { CreateServiceService } from '../create-service.service';
import { HttpClient } from '@angular/common/http';
import { URL } from '../app.config';
import { CreateUrl } from '../utils';

const PATH = '/customer'

interface Request{
  id:number,
  name:string,
  phone:string
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
    {provide:CreateServiceService<Request>, useFactory:service(PATH)}
  ]
})

export class CustomerComponent {
  constructor(private service:CreateServiceService<Request> ){
    this.service.create({id:1,name:"susana jimenez", phone:"666789999"})
  }
}