import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  submitLoginForm(){
    if(this.username!="" && this.password!=""){
      this.authService.authenticateUser(this.username,this.password);
    }
  }
}
