import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../servicios/vehiculo.service';

@Component({
  selector: 'app-show-vehiculos',
  templateUrl: './show-vehiculos.component.html',
  styleUrls: ['./show-vehiculos.component.css']
})
export class ShowVehiculosComponent implements OnInit {

  constructor(private Vehiculos : VehiculoService) { }

   VehiculosDos : any  = [];

  ngOnInit(): void {
    this.Vehiculos.getVehiculos().subscribe(data => {
      this.VehiculosDos = data;
      console.log(this.VehiculosDos); 
    });
  }

}
