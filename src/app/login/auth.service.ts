import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8080/';
  basic = '';
  constructor(private httpService: HttpClient) { }

  public authenticateUser(username: string, password: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basic
    });
    let options = { headers: headers };
    let data = {
      'username': username,
      'password': password
    }
    return this.httpService.put(this.BASE_URL + 'authenticate', data, options);
  }

  public isUserAuthenticated(){
    return true;
  }
}
