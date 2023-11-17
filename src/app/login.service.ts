import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public accessToken: any;
  public refreshToken: any;
  public username: any;
  public dateExperation: any;
  public roles: Array<string> = new Array;
  public host: string = 'http://localhost:8080';
  constructor(private httpClient: HttpClient, private router: Router) { }

  public login(data: any) {
    localStorage.clear();
    return this.httpClient.post<any>(this.host + '/login', data, {
      observe: 'response',
    }
    );
  }


  public saveAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    this.accessToken = accessToken;
    this.getUsernameAndRoles();
    this.getDateExperation();
  }

  public saveRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
    this.refreshToken = refreshToken;
  }
  public getUsernameAndRoles() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.accessToken);
    this.username = objJWT.sub;
    this.roles = objJWT.roles;
    localStorage.setItem('username', this.username);
  }
  public getDateExperation() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.accessToken);
    this.dateExperation = objJWT.exp;
    localStorage.setItem("date",this.dateExperation);
  }


  public isLogged() {
    let loggeduser = localStorage.getItem('accessToken');
    return !!loggeduser;
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {});
  }

}

