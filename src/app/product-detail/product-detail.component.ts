import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared';
import { Product } from '../shared/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { 
    this.route.data.subscribe(
      (data: {product: Product}) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.product = new Product(data.product[0]);
      }
    );
  }

  product: Product;
  quantity: number = 1;

  addToCart(product: Product) {
    let _product = new Product(product);
    this.cartService.add(_product);
  }

  spinner(value) {
    if ( value === '+1') {
      this.product.increment(); 
    } else if (this.quantity > 1 ) {
      this.product.decrement();
    }

    this.quantity = this.product.quantity;
  }
}
