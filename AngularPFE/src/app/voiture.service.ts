import { Injectable } from '@angular/core';
import { Voiture } from './voiture';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  voitureList: AngularFireList<any>


  constructor(private db:AngularFireDatabase ) {

    this.voitureList = db.list('voiture')

  


  
  }





  createVoitur(voitur: Voiture) {
    
    this.voitureList.push({
    num: voitur.num ,
    modele: voitur.modele ,
    marque: voitur.marque ,
    matricule: voitur.matricule,
    

    


  
    
}).catch(error=>{
console.error(error)

})

}


getUsers() : Observable<any>{
return this.db.list('voiture').snapshotChanges();
}

getUserById(id:any) : Observable<any>{
  return this.db.list('voiture', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
}}

  
  

