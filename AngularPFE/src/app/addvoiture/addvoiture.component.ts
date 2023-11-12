import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VoitureService } from '../voiture.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addvoiture',
  templateUrl: './addvoiture.component.html',
  styleUrls: ['./addvoiture.component.css']
})
export class AddvoitureComponent implements OnInit {
  
  errorMessage1:string ='';
  errorMessage:string ='';
  addUserForm !: FormGroup ;
 
  num: string;
   modele: string;
   matricule: string;
   marque: string;
  

   voitureList: AngularFireList<any>
  
  constructor(private VoitureService: VoitureService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth) { 
      
      this.voitureList = db.list('voiture')
    }

  ngOnInit(): void {
    this.addUserForm=new FormGroup({
      Num: new FormControl('',[
        Validators.required,
      Validators.pattern("[0-9]+"),
        Validators.minLength(1)
      ]),
      Modele: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      Matricule: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),

        Validators.minLength(3)
      ]),
      

      
      
      Marque: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
        
      ]),
      
          
      
        
    });
  }

  onSubmit() {
 
    let create = 'false';
    
            this.voitureList.push({
          
            num: this.num ,
            modele:this.modele,
            marque:this.marque,
            matricule:this.matricule,

           
        }).then(added =>{
            this.router.navigate(['/listvoitur'])
              
          
             
        
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



