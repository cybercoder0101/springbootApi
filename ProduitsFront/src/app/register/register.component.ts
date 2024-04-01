import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../model/user.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,ReactiveFormsModule,FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  public user=new User();
  confirmPassword?:string;
  myForm!:FormGroup
  err:any;
  constructor(private formBuilder:FormBuilder, private authService:AuthService) {
  }
  ngOnInit() {
    this.myForm=this.formBuilder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
    });
  }

  onRegister(){
    console.log(this.user)
    this.authService.registerUser(this.user).subscribe(
      {next:(res)=> {
          alert("valider votre email");
        },
        error:(err:any)=>{
        if (err.status ==400){
          this.err=err.error.message
        }
        }
      }
    )
  }

}
