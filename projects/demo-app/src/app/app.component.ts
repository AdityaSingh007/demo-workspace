import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/authentication-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  userName: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.authService.isauthenticated$.subscribe((response: any) => {
      this.userName = response.username;
    });
  }
  title = 'demo-app';

  public logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
