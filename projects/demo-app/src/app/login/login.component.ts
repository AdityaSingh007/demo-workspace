import { Component } from '@angular/core';
import { AuthService } from './authentication-service/auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from '@se/web-ui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}
  public userName: string = '';
  public password: string = '';
  public isDisabled: boolean = false;
  public login() {
    if (this.authService.authenticate(this.userName, this.password)) {
      sessionStorage.setItem('isAuthenticated', 'true');

      this.authService.isAuthenticated.next({ username: this.userName });

      this.router.navigate(['/navigation']);
    } else {
      const snackbar = this.snackbarService.open({
        message: 'Invalid login!!!',
        type: 'error',
      });
    }
  }

  /* testTypeScript(param: string): boolean {
    return true;
  }

  testJavascriptScript(param) {
    return true;
  } */
}
