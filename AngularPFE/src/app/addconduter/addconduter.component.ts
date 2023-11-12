import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConducteurService } from '../conducteur.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addconduter',
  templateUrl: './addconduter.component.html',
  styleUrls: ['./addconduter.component.css']
})
export class AddconduterComponent implements OnInit {
  
  errorMessage1:string ='';
  errorMessage:string ='';
  addUserForm !: FormGroup ;
 
  Cin: string;
  fullname: string;
  email: string;
  phone: string;
 
  

  conducterlist: AngularFireList<any> 
  conducterList: AngularFireList<unknown>;
  constructor(private ConducteurService : ConducteurService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth) { 
      
      this.conducterList = db.list('Drivers')
    }

  ngOnInit(): void {
    this.addUserForm=new FormGroup({
      CIn: new FormControl('',[
        Validators.required,
      Validators.pattern("[0-9]+"),
        Validators.minLength(3)
      ]),
      FullName: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
  
      Email: new FormControl('',[
        Validators.required,
        Validators.email
        
      ]),
    
      pHone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
    
    });
  }

  onSubmit() {
 
    let create = 'false';
    
            this.conducterList.push({
          
            Cin: this.Cin ,
            fullname:this.fullname,
            email:this.email,
            phone:this.phone,
          
        }).then(added =>{
            this.router.navigate(['/conducterlist'])
              
          
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
     
    })
    
   /*
    this.condactor = new Conductor(this.lastname,this.firstname,this.phone,this.address);
   
    console.log(this.condactor)
    this.conductorservice.createConductor(this.condactor)
    */
  
  }

}


