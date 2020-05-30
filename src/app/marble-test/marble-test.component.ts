import { Component, OnInit, OnDestroy } from '@angular/core';
import { MarbleTestService } from './marble-test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marble-test',
  templateUrl: './marble-test.component.html',
  styleUrls: ['./marble-test.component.css']
})
export class MarbleTestComponent implements OnInit, OnDestroy {
  tempProductList: any;
  constructor(private marbaleTestService: MarbleTestService) { }
  
  isPresent: boolean = false;
  private sub: Subscription;
  ngOnInit() {
    this.getProductData();
  }

  getProductData(){
    this.sub = this.marbaleTestService.getProductList().subscribe((products)=>{
      this.tempProductList = products;
      
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }



}
