import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Status from 'src/app/Classes/Status';
import { GenericService } from '../GenericService';

@Injectable({
  providedIn: 'root'
})
export class StatusService extends GenericService<Status>{

  constructor(protected http:HttpClient) { 
    super(http);
    this.complementourl = "/deputados"
  }

  getAll(){
    return this.list();
  }
  
}
