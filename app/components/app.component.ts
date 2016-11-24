import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
})
export class AppComponent {
  private cartCount: number;

  ngOnInit() {
    this.cartCount = 0;
  }
}
