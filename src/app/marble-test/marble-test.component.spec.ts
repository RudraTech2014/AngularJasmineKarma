import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbleTestComponent } from './marble-test.component';
import { MarbleTestService } from './marble-test.service';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';


const mockProductList = [{
  "title": "Brown eggs",
  "type": "dairy",
  "description": "Raw organic brown eggs in a basket",
  "filename": "0.jpg",
  "height": 600,
  "width": 400,
  "price": 28.1,
  "rating": 4
}, {
  "title": "Sweet fresh stawberry",
  "type": "fruit",
  "description": "Sweet fresh stawberry on the wooden table",
  "filename": "1.jpg",
  "height": 450,
  "width": 299,
  "price": 29.45,
  "rating": 4
}, {
  "title": "Asparagus",
  "type": "vegetable",
  "description": "Asparagus with ham on the wooden table",
  "filename": "2.jpg",
  "height": 450,
  "width": 299,
  "price": 18.95,
  "rating": 3
}];

describe('MarbleTestComponent', () => {
  let component: MarbleTestComponent;
  let fixture: ComponentFixture<MarbleTestComponent>;
  let mockList = mockProductList;
  let testService: MarbleTestService;


  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [MarbleTestComponent],
      providers: [MarbleTestService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbleTestComponent);
    component = fixture.componentInstance;
   testService = TestBed.get(MarbleTestService);
  });


  it('[Marble - cold] - should list products after getProductList ', async () => {


    let p$ = cold('(a|)', { a: mockList });
    let productSpy = spyOn(testService, 'getProductList').and.returnValue(p$);

    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();


    expect(productSpy).toHaveBeenCalled();

    const liElement = fixture.debugElement.queryAll(By.css('.list-group-item'));



    expect(liElement[0].nativeElement.innerText).toContain(mockList[0].title);
    expect(liElement[1].nativeElement.innerText).toContain(mockList[1].title);
    expect(liElement[2].nativeElement.innerText).toContain(mockList[2].title);
  });


  it('should test marble cold with rxjs internval', () => {
    const interObs = interval(20, getTestScheduler()).pipe(
      take(5),
      map(x => x * 2),
    );
    const coldObs = cold('--a-b-c-d-(e|)', { a: 0, b: 2, c: 4, d: 6, e: 8 });

    expect(interObs).toBeObservable(coldObs);

  });



});
