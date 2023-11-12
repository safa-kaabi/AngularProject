import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: any;
constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService){

}



  ngOnInit(): void {
    this.initForm()
  }
  initForm(){

    this.loginForm=this.fb.group({
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      pasword:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])


    })
  }
  get email(){
    return this.loginForm?.get('email')
  }
  get pasword(){
    return this.loginForm?.get('pasword')
  }
  login(){
    const email=this.loginForm.get('email').value;
    const password=this.loginForm.get('pasword').value;
    this.authservice.signInUser(email,password).then(
      () => {
        this.router.navigate(['/conducterlist']);
     
       
      },
      (error) => {
        this.errorMessage=error
      
        
      }
    )
}

}
