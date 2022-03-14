import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { RegistrarseI } from 'src/app/modelos/registrarse.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  registrarseForm = new FormGroup({
    username : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    password2 : new FormControl('', Validators.required),
  })

  
  constructor(private api :ApiService, private router:Router) { }

  contrasenaIguales:boolean = false;
  contrasenaMsg : string = "";  


  ngOnInit(): void {
  }

  onRegistrarse(form : RegistrarseI){
    console.log(form)
    if(this.registrarseForm.get("password")?.value == this.registrarseForm.get("password2")?.value){
      //LAS CONTRASEÑAS SON IGUALES 
       //POST AL ENDPOINT PARA REGISTRA USUARIO
       this.api.registrarOn(form).subscribe(data => {
         let datosResponse : ResponseI = data; 
         console.log(datosResponse); 
         
         if(datosResponse.status == "Satifactorio. Creaste un User nuevo."){
           //SI TODO SALE BIEN LO VA A MANDAR AL LOGIN PARA QUE INICIE SESION Y LE REGRESE EL TOKEN
           this.router.navigate(["../login"]);
         }
       })
    }
    else{
      this.contrasenaIguales = true;
      this.contrasenaMsg = "Las Contraseñas No Coninciden"; 
    }
  }

}
