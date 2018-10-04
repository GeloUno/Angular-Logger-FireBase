import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoginComponent> // , @Inject(MAT_DIALOG_DATA) public data: LoginData
  ) {}

  @ViewChild('form')
  form: NgForm;
  loginMess: FormGroup;

  // loginFormGrup =  new FormGroup()

  // matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.loginMess = this.initLoginForm();
  }

  initLoginForm() {
    return new FormGroup({
      emailFormControl: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      paswordFormControl: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9$@$!%*?&]{8,}$')

        //  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        // minimum 8 znaków jeden Duża litera, jedna cyfra, jednen znak specjalny
      ])
    });
  }
  onSubmit(form) {
    //  console.log(form);
   console.log(this.loginMess.value.emailFormControl);
    console.log(this.loginMess.value.paswordFormControl);
    console.log(this.loginMess);
  }
}
