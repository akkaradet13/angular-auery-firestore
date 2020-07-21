import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebase = {
  apiKey: "AIzaSyC-64dGv8F2Au29Waxjerjwu5dDSTYavfw",
  authDomain: "flutter-f50ea.firebaseapp.com",
  databaseURL: "https://flutter-f50ea.firebaseio.com",
  projectId: "flutter-f50ea",
  storageBucket: "flutter-f50ea.appspot.com",
  messagingSenderId: "992935802968",
  appId: "1:992935802968:web:ec41e49db188e93f95f22d",
  measurementId: "G-19DTEKBYH5"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  exports: [
    AngularFirestoreModule
  ]
})
export class AppFirebaseModule { }