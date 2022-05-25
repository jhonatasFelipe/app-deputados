import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import Conta from 'src/app/Classes/Conta';
import { environment } from 'src/environments/environment';
import { GenericService } from '../GenericService';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends GenericService<Conta> {
  constructor(protected http:HttpClient) {
    super(http, environment.urlApi);
    this.complementourl = "Conta";
    this.propertyObject = 'data';
  }

  

}
