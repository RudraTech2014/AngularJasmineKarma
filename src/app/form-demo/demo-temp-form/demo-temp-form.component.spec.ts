import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTempFormComponent } from './demo-temp-form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('DemoTempFormComponent', () => {
  let component: DemoTempFormComponent;
  let fixture: ComponentFixture<DemoTempFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTempFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email - Check - Invalid] - Should check email field is not valid',async(()=>{
    
    fixture.whenStable().then(()=>{
      let email = component.forgotForm.form.controls['useremail'];
      expect(email.valid).toBeFalsy();
      expect(component.forgotForm.valid).toBeFalsy();
      email.setValue('abc');
      expect(email.errors['email']).toBeTruthy();
    });
   

}));

it('[Email - Check - Valid] - Should check email field is not valid',async(()=>{
   
  fixture.whenStable().then(()=>{
    let email = component.forgotForm.form.controls['useremail'];
    email.setValue('abc@gmail.com');
    expect(email.valid).toBeTruthy();
    expect(component.forgotForm.valid).toBeTruthy();
  });
}));



it('[Form - Submit] - Should check form is submitted successful',async(()=>{
  fixture.whenStable().then(()=>{
    let email = component.forgotForm.form.controls['useremail'];
    email.setValue('abc@gmail.com');
    component.submitForm();
    fixture.detectChanges();
    let successMsg = fixture.debugElement.query(By.css('#success-msg'));
    expect(successMsg.nativeElement.innerText).toBe(component.message);

  });
}));





  

  
});
