import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../model/user.model";

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
  constructor(private formBuilder:FormBuilder) {
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
  }

}
