import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http : HttpClient) { 

  }

  Vehiculos : any = [];

  endpoint = "http://127.0.0.1:3333/"; 

  getVehiculos(): Observable<any>{
    let Endpoint = this.endpoint + "Vehiculo";
    return this.http.get(Endpoint);
    }

  createVehiculo(Vehiculo: any): Observable<any>{
    let Endpoint = this.endpoint + "Vehiculo";
    return this.http.post(Endpoint, Vehiculo);
  }
  
  editVehiculo(id : number,Vehiculo: any): Observable<any>{
    let Endpoint = this.endpoint + "Vehiculo/" + id;
    return this.http.put(Endpoint, Vehiculo);
  }

  deleteUser(id : number): Observable<any>{
    let Endpoint = this.endpoint + "Vehiculo/"+id;
    return this.http.delete(Endpoint);
  }

}