import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  show: boolean = false;
  products: Product[] = [];
  total: number = 0;
  
  constructor(
    private cartService:CartService
  ) {
    cartService.currentCart.subscribe(items => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.products = items;
        this.total = items.reduce((total, product) => {
          console.log(product);
          return total + product.getQuantity() * product.price;
        }, 0 );
    });
  }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show
  }

  removeCartItem(item: Product) {
    this.cartService.remove(item);
  }
}
