import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  private currentCartSubject = new BehaviorSubject<Product[]>([]);
  public currentCart = this.currentCartSubject.asObservable();

  constructor() { 
  }

  add(item) {
    console.log(`Add item ${item.title} to cart`);

    if ( this.items.includes(item) ) {
      console.log(this.items);
      this.update(item);
    } else {
      this.items.push(item);
      this.updateCart(this.items);
    }
  }

  remove(item) {
    console.log(`Remove item ${item.title} from cart`);
    this.items = this.items.filter(product => product.id != item.id);
    console.log(this.items);
    this.updateCart(this.items);
  }

  update(product: Product) {
    let index = this.items.indexOf(product);
    if ( index !== -1 ) {
      this.items[index].increment(product.quantity);
      this.updateCart(this.items);
    }
  }

  private updateCart(items) {
    this.currentCartSubject.next(items);
  }
}
