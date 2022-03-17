import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-off-canvas-bar',
  templateUrl: './off-canvas-bar.component.html',
  styleUrls: ['./off-canvas-bar.component.css']
})
export class OffCanvasBarComponent implements OnInit {

  constructor(private api : ApiService, private route : Router) { }

  ngOnInit(): void {
  }

  Username : string = "null"; 

  UserId : string = ""; 

  UserActivo = this.api.getActividad();

  sesionCerrar(){
    this.api.logout(this.api.getToken); 
    this.api.idUser = ""; 
    this.api.userName = ""; 
    this.UserActivo = false;
    this.api.UsusarioActivo = false; 
    console.log(this.UserActivo)
    console.log(this.api.UsusarioActivo); 
    localStorage.clear()
    this.route.navigate(["/"]);
    alert("Sesion Finalizada");
  }

  setDatos(){
    this.Username = this.api.getUserName(); 
    this.UserActivo = this.api.getActividad(); 
    this.UserId = this.api.getIdUser();
    console.log("OFFCANVAS"); 
  }
} 