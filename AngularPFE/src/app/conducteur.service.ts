import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Conducter } from './conducter';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
 
  conducterList: AngularFireList<any>


  constructor(private db:AngularFireDatabase ) {

    this.conducterList = db.list('Drivers')

  


  
  }





  createUser(user: Conducter) {
    
    this.conducterList.push({
    phone: user.phone ,
    fullname: user.fullname,
    Cin: user.Cin,
    email: user.email ,
    

    


  
    
}).catch(error=>{
console.error(error)

})

}


getUsers() : Observable<any>{
return this.db.list('Drivers').snapshotChanges();
}

getUserById(id:any) : Observable<any>{
  return this.db.list('Drivers', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
}}

  
  
