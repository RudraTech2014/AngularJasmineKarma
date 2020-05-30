import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo-temp-form',
  templateUrl: './demo-temp-form.component.html',
  styleUrls: ['./demo-temp-form.component.css']
})
export class DemoTempFormComponent implements OnInit {

  @ViewChild('forgotForm',{static: true}) forgotForm: NgForm;
  message: string;
  useremail: string;
  
  constructor() { }

  ngOnInit() {
    this.message = '';
  }

  public submitForm(){
    if(this.forgotForm.valid){
      this.message = "Email sent for password reset!";
      this.useremail = '';
      this.forgotForm.reset();
    }
  }

}
