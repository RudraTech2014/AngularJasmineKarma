import { Component, OnInit,  Output,EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoggedUser } from './LoggedUser';


@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  loginForm: FormGroup;
  message: string;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      useremail: new FormControl('',[Validators.required,Validators.email]),
      userpassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submitLoginForm(){
    if(this.loginForm.valid){
      this.message = "Form Submitted Successfuly";
    }
    
  }

}
