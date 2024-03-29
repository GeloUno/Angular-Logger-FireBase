import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  animal: string;
  name: string;
  iconMenu = true;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  loginDialogBox(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto'
      // data: { name: this.name, animal: this.animal }
    });
  }
  closeLoginBox() {
    this.dialog.closeAll();
  }
  logOut() {
    this.authService.logout();
  }
  changeIcon() {
    this.iconMenu = !this.iconMenu;
  }
}



/**
 * TODO: elementRef found <div class="mat-drawer-backdrop ng-star-inserted mat-drawer-shown"></div> and add click event
 */
