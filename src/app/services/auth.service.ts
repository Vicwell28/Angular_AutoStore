import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';
import { ApiService } from '../servicios/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl; 

  UsusarioActivo = false;

  constructor(private http : HttpClient, api : ApiService) { }

  register(user:User):Observable<any>{
    console.log(user); 
    return this.http.post(`${this.apiUrl}User`, user);
  }

  login(user:User):Observable<any>{
    this.UsusarioActivo = true; 
    return this.http.post(`${this.apiUrl}login`, user);
  }

  logout(token: any, body=""){
    this.http.post(`${this.apiUrl}logout`,body);
  }
}
