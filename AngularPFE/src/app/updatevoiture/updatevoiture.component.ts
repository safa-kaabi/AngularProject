import { Component, OnInit } from '@angular/core';
import { Voiture } from '../voiture';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';


@Component({
  selector: 'app-updatevoiture',
  templateUrl: './updatevoiture.component.html',
  styleUrls: ['./updatevoiture.component.css']
})
export class UpdatevoitureComponent implements OnInit {
  
  


  id:any
  errorMessage:string ='';
  formGroup!: FormGroup;
  errorMessage1:string ='';
 
  num: string;
  modele: string;
  marque: string;
  matricule: string;
  
  

  voiturdetails:any= []
  
  voiturforupdate: AngularFireList<any>
  data = {
    num: '',
    modele : '' ,
    matricule:"",
    marque :  '' ,
    
   } 
    id1: any;
  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private VoitureService: VoitureService) {
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.voiturforupdate = this.firebase.list('voiture');
    
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
   }
   ngOnInit(): void {
    this.formGroup=new FormGroup({
      Num: new FormControl('',[
        Validators.required,
      Validators.pattern("[0-9]+"),
        Validators.minLength(1)
      ]),
      Matricule: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),

        Validators.minLength(3)
      ]),
      Modele: new FormControl('',[
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
  

    this.VoitureService.getUserById(this.id1).subscribe((results) => {
      
      this.getuser(results)
    
    })

  }
  getuser(entries: any[]){
   
    this.voiturdetails = [];
  
    entries.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.voiturdetails.push(y as Voiture);

      this.data.num = this.voiturdetails[0]['num'] 
      this.data.modele = this.voiturdetails[0]['modele'] 
      this.data.marque = this.voiturdetails[0]['marque'] 
      this.data.matricule = this.voiturdetails[0]['matricule'] 
      
     
   })
   console.log("res");
   console.log(this.data.marque);
   console.log(this.voiturdetails);
   }

  onSubmit1() {
  
    let create = 'false';
    
     console.log(this.data.num);
     this.voiturforupdate.update(this.id1 , {
      num :  this.data.num ,
      modele : this.data.modele  ,
      marque :  this.data.marque ,
      matricule :  this.data.matricule ,
      
    }).then(added =>{

  this.router.navigate(['/listvoitur'])
    
   

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
  
  

 
  }
}

  


    
      
      
  
  

 
  



