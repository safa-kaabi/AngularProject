import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Voiture } from '../voiture';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-listvoitur',
  templateUrl: './listvoitur.component.html',
  styleUrls: ['./listvoitur.component.css']
})
export class ListvoiturComponent {
  displayUpdate: boolean = false;
 
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  num: string;
   modele: string;
   matricule: string;
   marque: string;
  
  voiturforupdate: AngularFireList<any>
  data = {
    num: '',
    modele : '' ,
    matricule:"",
    marque :  '' ,
   
   } 
    id1: any;

voiturfordelete : AngularFireList<any>; 
listvoitur: Voiture[] = [];

displayAdd: boolean = false;

voitureList: AngularFireList<any>

constructor(private router:Router, public dialog: MatDialog,
  private firebase: AngularFireDatabase,  private VoitureService: VoitureService,
  private route: ActivatedRoute , 
    private db:AngularFireDatabase ) {
      
      this.voitureList = db.list('voiture')

    this.voiturfordelete = this.firebase.list('voiture');
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.voiturforupdate = this.firebase.list('voiture');
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
  }


ngOnInit(): void {
  this.VoitureService.getUsers().subscribe((results) => {
    
    this.listVoitur(results)
 
  })
  

}

listVoitur(entries: any[]){
  this.listvoitur = [];
  entries.forEach(element => {
   let y = element.payload.toJSON()
   y["$key"] = element.key
   this.listvoitur.push(y as Voiture);
})
console.log(this.listvoitur);
}

openDialog(key: FirebaseOperation): void {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    width: '350px',
    data: "voulez-vous vraiment supprimer ces données?"
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result) {
    
      this.voiturfordelete.remove(key);
    
   
    }
  });   
} 







edit(key: string){
  
  this.router.navigate(["updatevoiture/"+key])

}
}


  





