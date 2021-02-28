import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private firestore:AngularFirestore) { }

  createData(){}
  updateData(){}
  getData(){
    return this.firestore.collection("user").snapshotChanges();

  }

  deleteData(data){}


}


