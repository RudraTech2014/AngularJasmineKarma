import { Component, ViewChild, ElementRef } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppComponent {
  @ViewChild('sidebarCollapse', {static: true}) sideBarCollapse: ElementRef;
  isToggled: boolean = true;
  title = 'RudraTech2014';

  constructor(){


  }

  toggleClass(): void{
    this.isToggled = !this.isToggled;
  }
}
