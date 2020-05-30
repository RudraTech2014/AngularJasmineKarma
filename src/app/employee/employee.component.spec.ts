import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AuthenticationService } from '../authentication.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [AuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthenticationService);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should assert value for "h1" element to be value of component.salSlip ', ()=>{
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  });

  it('should assert checkAuthenication has been called', ()=>{
    spyOn(authService, 'checkAuthentication');
     component.getSalarySlip();

    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('should assert checkAuthenication has been called and is returing value', ()=>{
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
     component.getSalarySlip();
    expect(component.salSlip).toEqual('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });
});
