import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  salSlip: string;
  constructor(private authService: AuthenticationService) {
    this.authService.authenticate();
  }

  ngOnInit() {
  }

  getSalarySlip() {
    if (this.authService.checkAuthentication()) {
      this.salSlip = 'Salary Slip';
    } else {
      this.salSlip = 'Not Authticated';
    }

  }

  /* getSalarySlip(){
    if(this.authService.checkAuthentication()){
        return "Salary Slip";
    }
    return "Not Authticated";
  } */





}
