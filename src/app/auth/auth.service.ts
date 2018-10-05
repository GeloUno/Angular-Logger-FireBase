import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { NavComponent } from '../nav/nav.component';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  error = null;
  /**
   * Subscribe and observable of LogIn and SingUp ERRORS
   */
  user: User;
  errorSubject = new Subject<String>();

  constructor(
    private angularFireBase: AngularFireAuth,
    private matDialog: MatDialog
  ) {
    /**
     * checing is user login and more information from fire base
     */
    angularFireBase.authState.subscribe(userStatusDate => {
      this.user = userStatusDate;
      console.log('FireBase User Status Token');
      console.log(userStatusDate);
    });
  }
  logInFireBaseSevices(login: string, password: string) {
    console.log('service LogIn');
    console.log(login);
    console.log(password);
    this.angularFireBase.auth
      .signInWithEmailAndPassword(login, password)
      .then(infoBack => {
        console.log('Service Autentication SingIn Then FireBase:');
        // console.log(infoBack);
        console.log(this.user);
        this.matDialog.closeAll();
      })
      .catch(err => {
        console.log('Service Autentication SingIn ERROR FireBase:');
        // console.log(err);
        console.log(this.user);
        this.error = err;
        this.error = err['message'];
        this.errorSubject.next(this.error);
        this.getError();
      });
  }

  /**
   * Retur as Observable need to be subscrabe from component
   */

  getError() {
    return this.errorSubject.asObservable();
  }

  singUpFireBaseSevices(login: string, password: string) {
    console.log('service SingUp');
    // console.log(login);
    //  console.log(password);
    console.log(this.user);

    this.angularFireBase.auth
      .createUserWithEmailAndPassword(login, password)
      .then(infoBack => {
        console.log('Service CreateUser FireBase Back:');
        //  console.log(infoBack);
        console.log(this.user);
        this.matDialog.closeAll();
      })
      .catch(err => {
        console.log('Service CreateUser FireBase Cach:');
        //  console.log(err);
        console.log(this.user);
        this.error = err;
        this.error = err['message'];
        this.errorSubject.next(this.error);
        this.getError();
      });
  }
  logout() {
    this.angularFireBase.auth
      .signOut()
      .then(logOutCom => {
        console.log('LogOut Com Mess:');
        console.log(this.user);
        // console.log(logOutCom);
      })
      .catch(err => {
        console.log('Error LogOut');
        console.log(this.user);
        console.log(err);
        this.error = err;
        this.error = err['message'];
        this.errorSubject.next(this.error);
        this.getError();
      });
  }
}
