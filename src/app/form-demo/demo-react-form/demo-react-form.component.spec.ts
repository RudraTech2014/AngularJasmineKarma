import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoReactFormComponent } from './demo-react-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDemoComponent } from '../form-demo.component';

describe('DemoReactFormComponent', () => {
  let component: DemoReactFormComponent;
  let fixture: ComponentFixture<DemoReactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FormDemoComponent,
        DemoReactFormComponent 
      ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 

  
});
