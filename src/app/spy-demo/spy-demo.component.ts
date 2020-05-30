import { Component, OnInit } from '@angular/core';
import { MockSpyService } from './mock-spy.service';

@Component({
  selector: 'app-spy-demo',
  templateUrl: './spy-demo.component.html',
  styleUrls: ['./spy-demo.component.css']
})
export class SpyDemoComponent implements OnInit {

  constructor(public mockService: MockSpyService) { }

  ngOnInit() {
    this.mockService.getValue();
  }

 
}
