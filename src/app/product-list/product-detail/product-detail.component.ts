import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any={};
  constructor(private router: Router,private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((searchData)=>{
      //Search and get the products which are filtered using the given search data
         this.productService.filterProductList(searchData.get('title').toLowerCase()).then((data) => {
           if(data[0]!==undefined){
              this.product = data[0];
            } else {
              this.product = {};
            }  
         
        });
    });
  }

  goBackProductList(event){
    event.preventDefault();
    this.router.navigateByUrl('product-list');
  }

}
