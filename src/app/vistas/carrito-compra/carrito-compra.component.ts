import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute, private api : ApiService, private nav : Router) { }

  idUser : any; 
  VehiculosQueTiene : any = [];

  ngOnInit(): void {

    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.idUser = params['id'];
        console.log(this.idUser); 
      }
    );

    this.api.obtenerLosVehiculosQueTienesCarrito(this.idUser).subscribe(datas =>{
      this.VehiculosQueTiene = datas.data
      console.log(this.VehiculosQueTiene); 
    })

  }

  eliminarDelCarrito(id:number){
    //http://127.0.0.1:3333/CarritoCompra/1  
    this.api.eliminarElVehiculoCarrito(id).subscribe(data =>{
      console.log("Se Ejecutor la funcion eliminar")
      console.log(data); 
      console.log(id); 
      alert("Se Ha Eliminado El Producto"); 
      this.nav.navigate(["../home"]);
    }); 
    
  }

}
