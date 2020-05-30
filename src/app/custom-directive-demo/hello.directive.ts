import { Directive, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[HelloDirective]'
})
export class HelloDirective implements OnInit {

  @Input('userinfo') username: string;

  @HostBinding('style.background-color') backgroundColor: string;

  @HostBinding('style.font-size') fontSize: string;

  @HostBinding('innerHTML') innerHtml: string;

  constructor() { }

  //adding hello to text of element and setting font-size
  ngOnInit() {
    this.innerHtml = 'Hello ' + this.username;
    this.fontSize = '18px';
    this.backgroundColor = 'green';
  }
  //binding mouseover event of the element
  @HostListener('mouseover') onMouseOver() {
    this.fontSize = '28px';
    this.backgroundColor = 'orange';
  }
  //binding mouseout event of the element
  @HostListener('mouseout') onMouseout() {
    this.backgroundColor = 'green';
    this.fontSize = '18px';
  }

}
