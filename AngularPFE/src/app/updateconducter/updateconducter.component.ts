import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConducteurService } from '../conducteur.service';
import { Conducter } from '../conducter';



@Component({
  selector: 'app-updateconducter',
  templateUrl: './updateconducter.component.html',
  styleUrls: ['./updateconducter.component.css']
})
export class UpdateconducterComponent implements OnInit {
  
  


  id:any
  errorMessage:string ='';
  formGroup!: FormGroup;
  errorMessage1:string ='';
 
  Cin: string;
  fullname: string;
  email: string;
  phone: string;
 
  

  userdetails:any= []
  
  userforupdate: AngularFireList<any>
  data = {
    Cin: '',
    fullname : '' ,
    phone :  '',
    email:"",
  

   } 
    id1: any;
  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private ConducteurService: ConducteurService) {
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.userforupdate = this.firebase.list('Drivers');
    
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
   }
   ngOnInit(): void {
    this.formGroup=new FormGroup({
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
    this.ConducteurService.getUserById(this.id1).subscribe((results) => {
      
      this.getuser(results)
    
    })

  }
  getuser(entries: any[]){
   
    this.userdetails = [];
  
    entries.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.userdetails.push(y as Conducter);

      this.data.Cin = this.userdetails[0]['Cin'] 
      this.data.fullname = this.userdetails[0]['fullname'] 
      this.data.email = this.userdetails[0]['email'] 
      this.data.phone = this.userdetails[0]['phone'] 
     


   })
   console.log("res");
   console.log(this.data.fullname);
   console.log(this.userdetails);
   }

  onSubmit1() {
  
    let create = 'false';
    
     console.log(this.data.Cin);
     this.userforupdate.update(this.id1 , {

      Cin :  this.data.Cin ,
      fullname : this.data.fullname  ,
      email :  this.data.email ,
      phone :  this.data.phone
      

    }).then(added =>{

  this.router.navigate(['/conducterlist'])
    
   

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
  
  

 
  }
}

  


    
      
      
  
  

 
  






