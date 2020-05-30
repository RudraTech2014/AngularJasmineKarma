import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyDemoComponent } from './spy-demo.component';
import { MockSpyService } from './mock-spy.service';


describe('SpyDemoComponent', () => {
  let component: SpyDemoComponent;
  let fixture: ComponentFixture<SpyDemoComponent>;
  let demofetchData: any;
  let demoList: any;
  let mockService: MockSpyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyDemoComponent ],
      providers: [MockSpyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockService = TestBed.get(MockSpyService);
 
    //code for jasmine.createSpy
    demofetchData =  jasmine.createSpy('fetchData');
    demofetchData('Dummy data fetched');

     //code for jasmine.createSpyObj
     demoList = jasmine.createSpyObj('demoList',['add','remove','refresh']);
     demoList.add();
     demoList.remove(1);
     demoList.refresh();

  });

  it('[spyOn] - should check mocked spy method is called', () => {
    let mockSpy = spyOn(mockService,'getValue');
    component.ngOnInit();
    expect(mockSpy).toHaveBeenCalled();
  });

  it('[jasmine.createSpy] - should check demofetchData is defined', ()=>{
    expect(demofetchData).toBeDefined();
});

it('[jasmine.createSpy] - should check demofetchData is called', ()=>{
    
  expect(demofetchData).toHaveBeenCalled();
});

it('[jasmine.createSpy] - should check demofetchData is called once',()=>{
expect(demofetchData.calls.count()).toBe(1);
});

it('[jasmine.createSpyObj] - should check all demoList methods are defined', ()=>{
  expect(demoList.add).toBeDefined();
  expect(demoList.remove).toBeDefined();
  expect(demoList.refresh).toBeDefined();
});

it('[jasmine.createSpyObj] - should check all demoList methods are called', ()=>{
    expect(demoList.add).toHaveBeenCalled();
    expect(demoList.remove).toHaveBeenCalled();
    expect(demoList.refresh).toHaveBeenCalled();
});

it('[jasmine.createSpyObj] - should check all demoList methods are called once',()=>{
    expect(demoList.add.calls.count()).toBe(1);
    expect(demoList.remove.calls.count()).toBe(1);
    expect(demoList.refresh.calls.count()).toBe(1);
});

it("[jasmine.createSpyObj] - tracks all the arguments of its calls", function() {
  expect(demoList.remove).toHaveBeenCalledWith(1);
});

});
