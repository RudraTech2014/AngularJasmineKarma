import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap } from '@angular/router';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable, of, Subject } from 'rxjs';

//importing routes
import { routes } from './app-routing.module';

//importing components and services
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './custom-pipe/square.pipe';
import { HelloDirective } from './custom-directive-demo/hello.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductService } from './product-list/product.service';



describe('AppComponent Routing Example', () => {
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let location: Location;
  let productService: ProductService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        IntroductionComponent,
        CustomPipeComponent,
        CustomDirectiveDemoComponent,
        SquarePipe,
        ProductListComponent,
        ProductDetailComponent,
        HelloDirective
      ],
      providers: [ProductService, AuthenticationService, {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of(convertToParamMap({ title: 'Asparagus' }))
        }
      }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    productService = TestBed.get(ProductService);


    router.initialNavigation();
  });

  it('should test redirection to default path (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/introduction');
    });

  }));


  it('should navigate to path when clicked on link(fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    let links = debugElement.queryAll(By.directive(RouterLinkWithHref));
    links[1].nativeElement.click();
    tick();
    expect(location.path()).toBe('/pipe-testing');
  }));

  it('should test component with Activated Route', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    router.navigate(['product-list']);
    tick();
    expect(location.path()).toBe('/product-list');
    fixture.detectChanges();
    let liElement = debugElement.queryAll(By.css('.list-group-item'));
    liElement[2].nativeElement.click();
    tick();
    expect(location.path()).toContain('/product-detail');
    fixture.detectChanges();

    let detailFixture = TestBed.createComponent(ProductDetailComponent);
    let detailComp = detailFixture.componentInstance;


    detailFixture.detectChanges();
    tick();
    expect(detailComp.product.title).toBe('Asparagus');
  }));



});
