import { SquarePipe } from './square.pipe';
import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';


describe('SquarePipe', () => {
  let pipe: SquarePipe;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquarePipe ],
      imports: [ FormsModule]
    })
    .compileComponents();
    pipe = new SquarePipe();
  }));
  
  it('create an instance', () => {    
    expect(pipe).toBeTruthy();
  });

  it('should check pipe transforms the number into its square',()=>{
      expect(pipe.transform(10)).toBe(100);
      expect(pipe.transform('10a')).toBe('Not a number');
  });

});
