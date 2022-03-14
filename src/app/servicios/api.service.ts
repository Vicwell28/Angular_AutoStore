import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { RegistrarseI } from '../modelos/registrarse.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://127.0.0.1:3333/";

  constructor(private http:HttpClient) { }

  loginOn(form:LoginI):Observable<ResponseI>{
    let endpoint = this.url + "login";  
    return this.http.post<ResponseI>(endpoint, form);
  }

  registrarOn(form:RegistrarseI):Observable<ResponseI>{
    let enpoint = this.url + "User";
    return this.http.post<ResponseI>(enpoint, form); 
  }
}
