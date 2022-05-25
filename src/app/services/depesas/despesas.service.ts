import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import  Despesa  from '../../Classes/Despesa';

@Injectable({
  providedIn: 'root'
})
export class DespesasService{

  url = environment.urlApi
  constructor(protected http:HttpClient) {
    
   }

   depesaspordeputado(idDeputado:number){
      return this.http.get<Observable<Despesa[]>>(`${this.url}Despesas/${idDeputado}`).pipe(
        map((resp:any)=>(
          resp.data
        ))
      );
   }
}
