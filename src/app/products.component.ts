import { Component } from '@angular/core'
import { ProductService } from './product.sevice';

@Component({
  selector: 'products',
  template: '<h1>Products</h1> <h2>  <ul> <li *ngFor= "let product of products">  {{product}} </li> </ul></h2>',
  providers:[ProductService]
})
export class ProductsComponent {

  products;

  constructor(productService:ProductService){
    this.products = productService.getProducts();
  }
}