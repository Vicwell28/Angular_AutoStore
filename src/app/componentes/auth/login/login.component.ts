import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; 
  user!: User; 

  constructor(private fb:FormBuilder) { 
    this.createForm(); 
  }

  ngOnInit(): void {
  }

  login(){
    this.setUser(); 
    console.log(this.user);
  }

  createForm():void{
    this.loginForm = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
    })
  }

  setUser():void{
    this.user = {
      email : this.loginForm.get('email')?.value, 
      password : this.loginForm.get('password')?.value
    }
  }

  
}
