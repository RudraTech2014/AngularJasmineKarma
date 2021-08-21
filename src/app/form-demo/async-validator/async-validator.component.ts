import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserValidators } from './user.validator';

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrls: ['./async-validator.component.css']
})
export class AsyncValidatorComponent implements OnInit {

  asyncForm: FormGroup;
  message: string;
  constructor(private userService: UserValidators) { }

  ngOnInit() {
    this.asyncForm = new FormGroup({
      username: new FormControl('', [Validators.required], this.userService.userValidator())


    });
  }

  submitLoginForm() {
    if (this.asyncForm.valid) {
      this.message = "Form Submitted Successfuly";
    }

  }

}
