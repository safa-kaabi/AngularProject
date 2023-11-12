import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm!: FormGroup;
  
  errorMessage: any;
constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService){

}



  ngOnInit(): void {
    this.initForm()
  }
  initForm(){

    this.RegisterForm=this.fb.group({
      firstname:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z]+")


      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z]+")


      ]),

     email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      pasword:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      repeatPassword:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])



    })

    }
  
  get firstname(){
    return this.RegisterForm?.get('firstname')
  }
  get lastname(){
    return this.RegisterForm?.get('lastname')
  }
  get email(){
    return this.RegisterForm?.get('email')
  }
  get pasword(){
    return this.RegisterForm?.get('pasword')
  }
  get repeatPassword(){
    return this.RegisterForm?.get('repeatPassword')
  }
  saveUser()
  {
    const email=this.RegisterForm.get('email').value;
    const pasword=this.RegisterForm.get('pasword').value;
    const repeatPassword=this.RegisterForm.get('repeatPassword').value;
    this.authservice.createNewUser(email,pasword).then(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage=error
        alert("connexion invalide");
        
      }
    )
  }

}
  
  




