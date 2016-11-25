import { Injectable } from '@angular/core';

//Models
import { CartItem } from '../models/cartitem';

@Injectable()
export class CartService {
  private cart: CartItem[] = [];

  constructor() {  }

  add(item: CartItem): void {
    this.cart.push(item);
  }

  remove(item: CartItem): void {
    this.cart = this.cart.filter(filterItem => filterItem.name_id !== item.name_id);
  }

  clear(): void {
    this.cart = [];
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  getTotalPrice(): number{
    return this.cart.reduce((sum, item) => {
      return sum+=item.price, sum;
    }, 0);
  }
}
