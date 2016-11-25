import { Component, OnInit } from '@angular/core';

//Services
import { CartService } from '../services/cart.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
})
export class AppComponent {
  private cartCount: number;

  constructor(private cartService: CartService) { };

  ngOnInit() {
    this.cartCount = 0;
  }
}
