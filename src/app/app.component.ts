import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface Item {
  number: Number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemCol: AngularFirestoreCollection<Item>;
  item$: Observable<Item[]>;
  
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.itemCol = this.afs.collection('items', ref => ref.where('number','>',3) .orderBy('number', 'asc').startAt(2).limit(20));
  this.item$ = this.itemCol.valueChanges();
  }
}
