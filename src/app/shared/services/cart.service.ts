import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class CartService {

  private items: Product[] = [];

  private currentCartSubject = new BehaviorSubject<Product[]>([]);
  public currentCart = this.currentCartSubject.asObservable();

  constructor() {}

  async add(product: Product) {
    if ( this.items.find(item => item.id === product.id) ) {
      this.items.forEach(item => {
        if ( item.id === product.id ) {
          item.increment(product.quantity)
        }
      });
    } else {
      this.items.push(product);
      console.log(`Add item ${product.title} to cart`);
    }
  
    this.updateCart(this.items);
  }

  remove(item: Product) {
    this.items = this.items.filter(product => product.id != item.id);
    this.updateCart(this.items);
    console.log(`Remove item ${item.title} from cart`);
  }

  private updateCart(products: Product[]): void {
    this.currentCartSubject.next(products);
    console.log("Cart updated!");
  }
}
