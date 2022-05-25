import { Injectable } from '@angular/core';
import Deputado from 'src/app/Classes/Deputado';
import { GenericService } from '../GenericService';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeputadosService extends GenericService<Deputado> {
  constructor(protected http:HttpClient) {
    super(http);
    this.complementourl = "deputados";
   }

  getDeputadoById(id:number){
    return this.loadById(id);
  }
}
