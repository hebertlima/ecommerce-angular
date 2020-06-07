import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() product: Product;
  
  constructor(
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    let _product = new Product(product);
    this.cartService.add(_product);
  }
}
