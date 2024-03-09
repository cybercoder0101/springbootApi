import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'salif', password: '123', roles: ['USER'] },
  ];
  public loggedUser!: string;
  public isLoggedIn: boolean = false;
  public roles!: string[];

  constructor(private router: Router) {}

  logout() {
    this.isLoggedIn = false;
    this.loggedUser = undefined!;
    this.roles = [];
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isLoggedIn));
    this.router.navigate(['/login']);
  }

  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username === curUser.username &&
        user.password == curUser.password
      ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isLoggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles) {
      return false;
    } else {
      return this.roles.indexOf('ADMIN') > -1;
    }
  }
  setLoggedUserFromLocalStorage(pw: string) {
    this.loggedUser = pw;
    this.isLoggedIn = true;
    this.getUserRoles(pw);
  }

  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if ((curUser.username = username)) this.roles = curUser.roles;
    });
  }
}
