import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import DeputadoApi from 'src/app/Classes/DeputadoApi';
import { environment } from 'src/environments/environment';
import { GenericService } from '../GenericService';

@Injectable({
  providedIn: 'root'
})
export class DeputadosApiService extends GenericService<DeputadoApi>{

  constructor(protected http:HttpClient) {
    super(http, environment.urlApi, 'data');
    this.complementourl = "Deputados";
  }

  Seguir(usuario:string, idDeputado:number){
    return this.http.post(`${environment.urlApi}/Usuario/deputado/follow`,{username:usuario, idDeputado:idDeputado});
  }

  deixardeSeguir(usuario:string, idDeputado:number){
    return this.http.post(`${environment.urlApi}/Usuario/deputado/unfollow`,{username:usuario, idDeputado:idDeputado});
  }

  seguindo(usuario:string){
    return this.http.get<Observable<DeputadoApi[]>>(`${environment.urlApi}/Usuario/deputado/following`,{params:{username:usuario}}).pipe(
      map((resp:any)=>(resp.data))
    );
  }
}
