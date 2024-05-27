import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Subject, subscribeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated: Subject<any> = new Subject<any>();

  public isauthenticated$ = this.isAuthenticated.asObservable();

  private userList: user[] = [
    { userName: 'Demo', password: 'demo' },
    { userName: 'Admin', password: 'admin' },
  ];

  constructor() {}

  authenticate(userName: string, password: string): boolean {
    return (
      this.userList.filter(
        (x) =>
          x.userName.toLocaleLowerCase() === userName.toLocaleLowerCase() &&
          x.password === password
      )?.length > 0
    );
  }

  logout() {
    sessionStorage.clear();
  }
}
