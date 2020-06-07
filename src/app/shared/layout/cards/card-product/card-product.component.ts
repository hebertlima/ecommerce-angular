import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() product: Product;
  
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // this.product = new Product(this.product);
  }

  addToCart(item: Product) {
    this.cartService.add(item);
  }
}
