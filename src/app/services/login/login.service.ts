import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/Classes/User';
import { environment } from 'src/environments/environment';
import { GenericService } from '../GenericService';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends GenericService<User> {

  constructor( protected http:HttpClient) {
    super(http, environment.urlApi,'data');
    this.complementourl = 'login'
   }
}
