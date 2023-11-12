import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pasword',
  templateUrl: './forget-pasword.component.html',
  styleUrls: ['./forget-pasword.component.css']
})
export class ForgetPaswordComponent {
  email:string
  errorMessage: string;
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  resetPassword(email: string){
    
    this.authservice.resetPassword(email).then(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage=error
       
      }
    )
    
    }

}
