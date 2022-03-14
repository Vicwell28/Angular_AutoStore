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

  ngOnInit(): void {
  }

  onLogin(form : LoginI){
    //console.log(form); 
    this.api.loginOn(form).subscribe(data => {
      console.log(data); 
      let datosResponse : ResponseI = data;
      if(datosResponse.status){
        localStorage.setItem("Token", datosResponse.message.token );
        this.router.navigate(['/']);
      }
      else {
        this.errorStatus = true; 
        if(data.message.responseText == "E_INVALID_AUTH_UID: User not found"){
          this.errorMsg = "Usuario No Encontrado";
        }
      }
    })
  }

}
