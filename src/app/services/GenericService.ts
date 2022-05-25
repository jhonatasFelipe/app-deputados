import{HttpClient,HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs"
import { environment } from "../../environments/environment";
import { map, take } from 'rxjs/operators';


export class GenericService<T>{
    protected headers = new HttpHeaders();
    protected  API_URL :string;
    protected complementourl:string;
    protected propertyObject:string;
    constructor(protected http:HttpClient , protected url?:string, protected property?:string){
        this.API_URL = url ? url : environment.urlCamara;
        this.propertyObject = property? property : 'dados'; 
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Accept' , 'application/json');
        this.headers.append('Content-type' , 'application/json');
    }
    list(parametros?:any):Observable<T[]> | Observable<any>{
        return this.http.get<T[]>(this.API_URL + this.complementourl,{ params:parametros }).pipe(
            take(1),
            map((resp:any)=>{
                return resp[this.propertyObject];
            }))
    }

    new (data:any ,id?:any, complemento?:string){
        if(id)
            return this.http.post<T>(this.API_URL + this.complementourl+"/"+id,data,{headers: this.headers}).pipe(
                take(1)
            );
        if(complemento)
            return this.http.post<T>(this.API_URL + this.complementourl+"/"+complemento ,data).pipe(
                take(1)
            );
        return this.http.post<T>(this.API_URL + this.complementourl ,data).pipe(
            take(1)
        );
    }

    update (data:any){
        return this.http.put<T>(this.API_URL + this.complementourl ,data).pipe(
            take(1)
        );
    }

    loadById(id:number){
        return this.http.get<T>(`${this.API_URL}${this.complementourl}/${id}` ).pipe(
            take(1),
            map((resp:any)=>(
                resp[this.propertyObject]
            ))
        );
    }

    remove(id){
        return this.http.delete(this.API_URL + this.complementourl+'/'+id).pipe(
            take(1)
        );
    }

    newWithFiles(data:any ,id?:any){
        if(id)
            return this.http.post<T>(this.API_URL +
                 this.complementourl+"/"+id,data,{ headers: this.headers , observe: "events", reportProgress: true}).pipe(
            );
        return this.http.post<T>(this.API_URL + this.complementourl,data , { observe: "events",  reportProgress: true}).pipe(
        );

    }

    teste(){
        return this.http.post('https://tcciideputadosapi.azurewebsites.net/api/Usuario/deputado/follow',{
            userName: "vhos",
            idDeputado: 204554
          });
    }
}