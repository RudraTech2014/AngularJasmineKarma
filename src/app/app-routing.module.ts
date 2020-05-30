import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';

import { EventTestComponent } from './event-test/event-test.component';

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


export const routes: Routes = [
  {path: 'introduction', component: IntroductionComponent},
  {path: 'directive-testing', component: CustomDirectiveDemoComponent},
  {path: 'pipe-testing', component: CustomPipeComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-detail/:title', component: ProductDetailComponent},
  { path: '', redirectTo: 'introduction', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
