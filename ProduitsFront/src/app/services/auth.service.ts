import {apiURL, globalUrl} from './../config';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  token!: string;
  public loggedUser!: string;
  public isLoggedIn: boolean = true;
  public roles!: string[];
  url: string = 'http://localhost:8080/produits';
  private helper = new JwtHelperService();

  constructor(private router: Router, private http: HttpClient) {}

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isLoggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  registerUser(user:User){

  return this.http.post<User>(globalUrl+"/register", user,{observe:'response'});
  }

  /*  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username === curUser.username &&
        user.password === curUser.password
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
  } */

  isAdmin(): Boolean {
    if (!this.roles) {
      return false;
    } else {
      return this.roles.indexOf('ADMIN') >= 0;
    }
  }

  setLoggedUserFromLocalStorage(pw: string) {
    this.loggedUser = pw;
    this.isLoggedIn = true;
    //this.getUserRoles(pw);
  }

  /*  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username === username) this.roles = curUser.roles;
    });
  } */

  login(user: User) {
    return this.http.post<User>(this.url + '/login', user, {
      observe: 'response',
    });
  }

  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.token = jwt;
    this.isLoggedIn = true;
    this.decodeJWT();
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }

  getToken(): string {
    return this.token;
  }

  decodeJWT() {
    if (this.token == undefined) return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }

  isTokenExpired(): Boolean {
    return this.helper.isTokenExpired(this.token);
  }
}
