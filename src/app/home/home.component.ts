import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit(): void {

  }

  idUser = ""; 
  userName = ""; 
  emailUser = ""; 
  actividadUser = false; 


  Open(){
    console.log(this.api.getUserName())
    this.idUser = this.api.getIdUser();
    this.userName = this.api.getUserName();
    this.emailUser = this.api.CorreoUser; 
    this.actividadUser = this.api.getActividad(); 
  }

}
