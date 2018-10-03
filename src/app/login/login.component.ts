import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 // loginFormGrup =  new FormGroup()
  emailFormControl = new FormControl('', [
    Validators.required,
     Validators.email,
  ]);

  paswordFormControl = new FormControl('', [
  Validators.required,
  //  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  // minimum 8 znaków jeden Duża litera, jedna cyfra, jednen znak specjalny
  ]);
  // matcher = new MyErrorStateMatcher();

  ngOnInit() {}
}


