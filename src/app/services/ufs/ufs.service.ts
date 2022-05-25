import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Uf from 'src/app/Classes/Uf';
import { GenericService } from '../GenericService';

@Injectable({
  providedIn: 'root'
})
export class UfsService extends GenericService<Uf> {

  constructor(protected http:HttpClient) {
    super(http);
    this.complementourl = "referencias/uf";
   }
}









