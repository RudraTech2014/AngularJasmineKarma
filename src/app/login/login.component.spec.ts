import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

class MockAuthService extends AuthService{
  public isAutheticated(){
    return true;
  }
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedAuthService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [AuthService]
    })
      .compileComponents();
    //Override's the component and its providers
      TestBed.overrideComponent(
        LoginComponent,
        {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
      );

      //creating the fixute and getting component instance
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //getting the instance of service using TestBed's get method
    testBedAuthService = TestBed.get(AuthService);

  }));

  //testing the service created using TestBed.get
  it('should check the service instansiated using TestBed.get', () => {
    expect(testBedAuthService instanceof AuthService).toBeTruthy();
  });
  
  //using the inject function
  it('should inject service using inject function and check its instance',
   inject([AuthService],(injectedService: AuthService)=>{
    expect(injectedService).toBeTruthy();
    expect(injectedService instanceof AuthService).toBeTruthy();
  }));

  //using the componentOverride
  it('should test injected service injected using component overriding', ()=>{
    let overRiddenService = fixture.debugElement.injector.get(AuthService);
    expect(overRiddenService instanceof MockAuthService).toBeTruthy();
  });


});
