import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AuthenticationService } from './authentication.service';
import { EventTestComponent } from './event-test/event-test.component';
import { EmployeeService } from './employee/employee.service';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { HelloDirective } from './custom-directive-demo/hello.directive';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SquarePipe } from './custom-pipe/square.pipe';
import { SpyDemoComponent } from './spy-demo/spy-demo.component';
import { InOutDemoComponent } from './in-out-demo/in-out-demo.component';
import { UserDetailComponent } from './in-out-demo/user-detail/user-detail.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { DemoReactFormComponent } from './form-demo/demo-react-form/demo-react-form.component';
import { DemoTempFormComponent } from './form-demo/demo-temp-form/demo-temp-form.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { MarbleTestComponent } from './marble-test/marble-test.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { AsyncValidatorComponent } from './form-demo/async-validator/async-validator.component';
import { UserValidators } from './form-demo/async-validator/user.validator';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EventTestComponent,
    ProductListComponent,
    LoginComponent,
    CustomDirectiveDemoComponent,
    HelloDirective,
    CustomPipeComponent,
    SquarePipe,
    SpyDemoComponent,
    InOutDemoComponent,
    UserDetailComponent,
    FormDemoComponent,
    DemoReactFormComponent,
    DemoTempFormComponent,
    HttpDemoComponent,
    MarbleTestComponent,
    IntroductionComponent,
    ProductDetailComponent,
    AsyncValidatorComponent
    //FirstTestComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, EmployeeService, UserValidators],
  bootstrap: [AppComponent]
})
export class AppModule { }
