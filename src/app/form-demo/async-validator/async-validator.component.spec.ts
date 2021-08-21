import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AsyncValidatorComponent } from './async-validator.component';
import { UserValidators } from './user.validator';

describe('AsyncValidatorComponent', () => {
  let component: AsyncValidatorComponent;
  let fixture: ComponentFixture<AsyncValidatorComponent>;
  let userValid: UserValidators;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncValidatorComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [UserValidators]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncValidatorComponent);
    component = fixture.componentInstance;
    userValid = TestBed.get(UserValidators);
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('unit test Async Validation testing',fakeAsync(()=>{
    let username = component.asyncForm.controls['username'];
    
    username.setValue('Bret');
   
    fixture.detectChanges();

    spyOn(userValid, 'userValidator').and.callThrough();
    
    tick(1000);
    fixture.detectChanges();
    expect(username.hasError).toBeTruthy();
    
  }));
  
});
