import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { RegistrarseI } from '../modelos/registrarse.interface';
import { carritoComprasI } from '../modelos/carritoCompra.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://127.0.0.1:3333/";

  UsusarioActivo = false;
  CorreoUser = "";
  idUser = "";
  tipoUser = "";
  userName = ""; 

  constructor(private http:HttpClient) { }

  loginOn(form:LoginI):Observable<ResponseI>{
    let endpoint = this.url + "login";  
    return this.http.post<ResponseI>(endpoint, form);
  }

  sacarUser(email:string){
    let endpoint = this.url + "User/" + email; 
    return this.http.get<ResponseI>(endpoint);
  }

  sacarUserAll(id:string){
    let endpoint = this.url + "User/" + id; 
    return this.http.get<ResponseI>(endpoint);
  }

  registrarOn(form:RegistrarseI):Observable<ResponseI>{
    let enpoint = this.url + "User";
    return this.http.post<ResponseI>(enpoint, form); 
  }

  logout(token: any, body=""){
    localStorage.removeItem("Token")
    this.http.post(`${this.url}logout`,body);
  }

  setToken(token : string){
    localStorage.setItem("Token", token);
  }

  getToken(){
    console.log(localStorage.getItem("Token")); 
    return localStorage.getItem("Token");
  }

  getActividad(){
    return this.UsusarioActivo; 
  }

  getUserName(){
    return this.userName;
  }

  getIdUser(){
    return this.idUser;
  }




  //METODOS PARA CARRITO COMPRA
  carritoCompras(form:carritoComprasI):Observable<ResponseI>{
    let endpoint = this.url + "CarritoCompra";  
    return this.http.post<ResponseI>(endpoint, form);
  }

  obtenerLosVehiculosQueTienesCarrito(id:number){
    let enpoint = this.url + "CarritoCompra/" + id; 
    return this.http.get<ResponseI>(enpoint)
  }

  obtenerElVehiculo(id:number){
    let enpoint = this.url + "Vehiculo/" + id; 
    return this.http.get<ResponseI>(enpoint)
  }

  eliminarElVehiculoCarrito(id:number){
    //http://127.0.0.1:3333/CarritoCompra/1  
    let enpoint = this.url + "CarritoCompra/" + id;
    console.log(enpoint);
    return this.http.delete<ResponseI>(enpoint)
  }

}
