import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';
import { LoginI } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  constructor(private api:ApiService, private router:Router) { }

  errorStatus : boolean = false; 
  errorMsg : string = '';
  //DATOS USUARIO
  idUser = "";
  userName = "";

  ngOnInit(): void {
  }

  onLogin(form : LoginI){
    //console.log(form); 
    this.api.loginOn(form).subscribe(datas => {
      console.log(datas); 
      let datosResponse : ResponseI = datas;
      console.log("Valores");
      console.log(datosResponse.status);
      if(datosResponse.status){
        //console.log(datosResponse.data.token); 
        this.api.UsusarioActivo = true; 
        localStorage.setItem("Token", datosResponse.data.token);
        this.api.sacarUser(form.email).subscribe(datas => {
          console.log(datas);
          this.api.idUser = datas.data.id;
          console.log(this.api.idUser); 
          this.api.sacarUserAll(this.api.idUser).subscribe(datos => {
            this.api.userName = datos.data.username;
            console.log(this.api.userName);
          })
        }); 
        //SI TODO SALE BIEN OBJETONGO EL TOKEN, CAMBIO VARIABLE COMO USUARIO ACTIVO, Y OBTENGO LOS DATOS DEL USER.
        this.router.navigate(['/home']);
      }
      else {
        this.errorStatus = true; 
        if(datas.data.responseText == "E_INVALID_AUTH_UID: User not found"){
          this.errorMsg = "Usuario No Encontrado";
        }
      }
    })
  }

}
