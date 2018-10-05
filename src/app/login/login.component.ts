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
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent> // , @Inject(MAT_DIALOG_DATA) public data: LoginData
  ) {}
  @ViewChild('form')
  form: NgForm;
  loginMess: FormGroup;
  error = null;
  // loginFormGrup =  new FormGroup()

  // matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.loginMess = this.initLoginForm();

    /**
     * Subscribe method of errors coming from FireBase in service auth
     */
    this.authService.getError().subscribe(dataError => {
      this.error = dataError;
    });
  }

  initLoginForm() {
    return new FormGroup({
      emailFormControl: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      paswordFormControl: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9$@$!%*?&]{5,}$')

        //  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        // minimum 8 znaków jeden Duża litera, jedna cyfra, jednen znak specjalny
      ])
    });
  }
  onSubmit() {
    //  console.log(form);
    // console.log(this.loginMess.value.emailFormControl);
    //  console.log(this.loginMess.value.paswordFormControl);
    // console.log(this.loginMess);
    this.authService.logInFireBaseSevices(
      this.loginMess.value.emailFormControl,
      this.loginMess.value.paswordFormControl
    );
  }
  singUp() {
    //  console.log(this.loginMess.value.emailFormControl);
    // console.log(this.loginMess.value.paswordFormControl);
    // console.log(this.loginMess);
    this.authService.singUpFireBaseSevices(
      this.loginMess.value.emailFormControl,
      this.loginMess.value.paswordFormControl
    );
  }
}
