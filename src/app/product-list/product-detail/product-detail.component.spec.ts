import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { ActivatedRouteStub } from '../activated-route-stub';
import { of } from 'rxjs';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  

  beforeEach(async(() => {
    
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [ProductService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ title: 'Asparagus' }))
          }
        },
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    
  }));

  it('should test route parameters using Activated routes', fakeAsync(() => {  
      fixture.detectChanges();
      tick();
      expect(component.product.title).toBe('Asparagus');
  }));
});
