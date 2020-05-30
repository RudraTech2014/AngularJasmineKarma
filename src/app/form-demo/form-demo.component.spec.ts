import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormDemoComponent } from './form-demo.component';
import { By } from '@angular/platform-browser';


describe('FormDemoComponent', () => {
  let component: FormDemoComponent;
  let fixture: ComponentFixture<FormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemoComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email-Check] - should check users email address is invalid', ()=>{
    let email = component.loginForm.controls['useremail'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');

    expect(email.errors['email']).toBeTruthy();
  });
 
  it('[Email-Check] - shoul check users correct email address is entered', ()=>{
    let email = component.loginForm.controls['useremail'];
    email.setValue('abc@gmail.com')
    expect(email.errors).toBeNull();
  });


  
  it('[Password-Check] - should check password errors', ()=>{
    let pwd = component.loginForm.controls['userpassword'];
    expect(pwd.errors['required']).toBeTruthy();
    pwd.setValue('1234');
    expect(pwd.errors['minlength']).toBeTruthy();
  });

  it('[Password-Check] - should check password validity', ()=>{
    let pwd = component.loginForm.controls['userpassword'];
    pwd.setValue('123456')
    expect(pwd.errors).toBeNull();
    expect(pwd.valid).toBeTruthy();
    
  });

  it('[Form-Check] - should check form is valid or not if no values entered',()=>{
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('[Form-Check] - should check form is valid or not when values entered',()=>{
    component.loginForm.controls['useremail'].setValue('abc@xyz.com');
    component.loginForm.controls['userpassword'].setValue('123456');

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('[Form-Submit] - should check form is submitted', ()=>{
    //check form is invalid
    expect(component.loginForm.invalid).toBeTruthy();
    let btn = fixture.debugElement.query(By.css('input[type=submit]'));
    //check button is disabled
    expect(btn.nativeElement.disabled).toBeTruthy();

    component.loginForm.controls['useremail'].setValue('abc@xyz.com');
    component.loginForm.controls['userpassword'].setValue('123456');
    fixture.detectChanges();
    //check button is enabled
    expect(btn.nativeElement.disabled).toBeFalsy();

    component.submitLoginForm();
    fixture.detectChanges();
    
    let successDiv = fixture.debugElement.query(By.css('#success-message')).nativeElement.innerText;
    expect(successDiv).toBe('Form Submitted Successfuly')
  });


});
