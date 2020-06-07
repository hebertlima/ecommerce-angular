import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared';
import { Product } from '../shared/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  product: Product;
  quantity: number = 1;

  ngOnInit(): void {
   this.route.data.subscribe(
     (data: {product: Product}) => {
       window.scrollTo({top: 0, behavior: 'smooth'});
       this.product = new Product(data.product[0]);
       console.log(this.product);
     }
   );
  }

  addToCart(item: Product) {
    if(this.quantity > 1) {
      item.increment(this.quantity);
    }
    this.cartService.add(item);
  }

  spinner(value) {
    if ( value == '-1' && this.quantity < 2 ) return;
      this.quantity = this.quantity + parseInt(value);
  }
}
