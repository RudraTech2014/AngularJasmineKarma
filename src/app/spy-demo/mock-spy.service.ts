import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockSpyService {

  constructor() { }
  
  public getValue(){
    return 'Sample value';
  }

  
}
