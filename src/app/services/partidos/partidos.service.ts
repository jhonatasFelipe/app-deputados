import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Partido from 'src/app/Classes/Partido';
import { GenericService } from '../GenericService';

@Injectable({
  providedIn: 'root'
})
export class PartidosService extends GenericService<Partido> {
  constructor(protected http: HttpClient) { 
    super(http);
    this.complementourl = '/partidos'
  }
}
