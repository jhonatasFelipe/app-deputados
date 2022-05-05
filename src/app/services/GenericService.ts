import{HttpClient,HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs"
import { environment } from "../../environments/environment";
import { map, mapTo, take } from 'rxjs/operators';


export class GenericService<T>{
    protected headers = new HttpHeaders();
    protected  API_URL :string;
    protected complementourl:string;
    constructor(protected http:HttpClient){
        this.API_URL = environment.urlCamara;
        this.headers.append('enctype', 'multipart/form-data');
        this.headers.append('Accept' , 'application/json');
    }
    list():Observable<T[]>{
        return this.http.get<T[]>(this.API_URL + this.complementourl).pipe(
            take(1),
            map((resp:any)=>{
                return resp.dados
            }));
    }

    new (data:any ,id?:any){
        if(id)
            return this.http.post<T>(this.API_URL + this.complementourl+"/"+id,data,{headers: this.headers}).pipe(
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
        return this.http.get<T>(`${this.API_URL}/${this.complementourl}/${id}` ).pipe(
            take(1),
            map((resp:any)=>(
                resp.data
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
}