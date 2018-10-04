import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private angularFireBase: AngularFireAuth) {}

  logInFireBaseSevices(login: string, password: string) {
    console.log('service LogIn');
    console.log(login);
    console.log(password);
    this.angularFireBase.auth
      .signInWithEmailAndPassword(login, password)
      .then(infoBack => {
        console.log('Service Autentication SingIn Then FireBase:');
        console.log(infoBack);
      })
      .catch(err => {
        console.log('Service Autentication SingIn Then FireBase:');
        console.log(err);
      });
  }

  singUpFireBaseSevices(login: string, password: string) {
    console.log('service SingUp');
    console.log(login);
    console.log(password);
    this.angularFireBase.auth
      .createUserWithEmailAndPassword(login, password)
      .then(infoBack => {
        console.log('Service CreateUser FireBase Back:');
        console.log(infoBack);
      })
      .catch(catchBack => {
        console.log('Service CreateUser FireBase Cach:');
        console.log(catchBack);
      });
  }
  logout() {}
}
