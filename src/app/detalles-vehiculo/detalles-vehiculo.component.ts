import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { carritoComprasI } from '../modelos/carritoCompra.interface';
import { ApiService } from '../servicios/api.service';



@Component({
  selector: 'app-detalles-vehiculo',
  templateUrl: './detalles-vehiculo.component.html',
  styleUrls: ['./detalles-vehiculo.component.css']
})
export class DetallesVehiculoComponent implements OnInit {

  constructor( private rutaActiva: ActivatedRoute, private api : ApiService) { }

   idAuto : any; 
   idUser : any; 
   Vehiculo : any = []

   carritoForm = ({
    Vehiculo : 0,
    User : 0
  });

  

   

  ngOnInit(): void {

    this.idUser = this.api.getIdUser(); 
    
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idAuto = params['id'];
        console.log(this.idAuto); 
      }
    );

    this.api.obtenerElVehiculo(this.idAuto).subscribe(datas => {
      this.Vehiculo = datas
      console.log(this.Vehiculo); 
    })
  }


  anadirCarrito(AutoId : string, UserId : string){
    this.carritoForm.Vehiculo = parseInt(AutoId); 
    this.carritoForm.User = parseInt(this.traerUser()); 
    this.api.carritoCompras(this.carritoForm).subscribe(data =>{
      console.log(data); 
    })
  }

  traerUser(){
    return this.idUser = this.api.getIdUser();
  
  }




}
