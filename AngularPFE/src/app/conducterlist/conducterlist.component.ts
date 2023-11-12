import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Conducter } from '../conducter';
import { ConducteurService } from '../conducteur.service';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';



@Component({
  selector: 'app-conducterlist',
  templateUrl: './conducterlist.component.html',
  styleUrls: ['./conducterlist.component.css']
})
export class ConducterlistComponent implements OnInit {
  displayUpdate: boolean = false;
 
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  Cin: string;
  fullname: string;
  email: string;
  phone: string;

  
  userforupdate: AngularFireList<any>
  data = {
    Cin: '',
    fullname : '' ,
    phone :  '',
    email:"",
   } 
    id1: any;

userfordelete : AngularFireList<any>; 
listuser: Conducter[] = [];

displayAdd: boolean = false;

conducterList: AngularFireList<any>

constructor(private router:Router, public dialog: MatDialog,
  private firebase: AngularFireDatabase,  private ConducteurService: ConducteurService,
  private route: ActivatedRoute , 
    private db:AngularFireDatabase ) {
      
      this.conducterList = db.list('Drivers')

    this.userfordelete = this.firebase.list('Drivers');
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.userforupdate = this.firebase.list('Drivers');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


ngOnInit(): void {
  this.ConducteurService.getUsers().subscribe((results) => {
    
    this.listUser(results)
 
  })
  

}

listUser(entries: any[]){
  this.listuser = [];
  entries.forEach(element => {
   let y = element.payload.toJSON()
   y["$key"] = element.key
   this.listuser.push(y as Conducter);
})
console.log(this.listuser);
}

openDialog(key: FirebaseOperation): void {
  const dialogRef = this.dialog.open(ConfirmationDialogComponentComponent, {
    width: '350px',
    data: "voulez-vous vraiment supprimer ces données?"
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result) {
    
      this.userfordelete.remove(key);
    
   
    }
  });   
} 







edit(key: string){
  
  this.router.navigate(["updateconducter/"+key])

}
}


  


