import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user! : User; 

  constructor(private fb : FormBuilder, private authService:AuthService) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  register():void{
    this.setUser();
    this.authService.register(this.user).subscribe((data:any) => {
      console.log("Registro Completado"); 
    }) 
  }

  createForm():void{
    this.registerForm = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]],
      password2 : ['', [Validators.required]],
    });
  }

  setUser():void{
    this.user = {
      email : this.registerForm.get('email')?.value, 
      password : this.registerForm.get('password')?.value
    }
  }

}
