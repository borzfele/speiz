import { Product } from './../../components/shopping-list/shopping-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss']
})
export class ShoppingListPageComponent implements OnInit {

  products = [
    {quantity: '1', measurementUnit: 'kg', name: 'kenyér'},
    {quantity: '3', measurementUnit: 'kg', name: 'krumpli'},
    {quantity: '6', measurementUnit: 'db', name: 'hagyma'},
    {quantity: '1', measurementUnit: 'db', name: 'margarin'},
    {quantity: '1', measurementUnit: 'l', name: 'tej'},
    {quantity: '5', measurementUnit: 'kg', name: 'narancs'},
    {quantity: '40', measurementUnit: 'dkg', name: 'felvágott'},
    {quantity: '1', measurementUnit: 'kanál', name: 'kutyafos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(product: Product): void {
    this.products.push(product);
    this.products = this.products.slice();
  }

  onFinishShopping(shoppingList: any): void {
    for (let i = 0; i < this.products.length; i++) {
      Object.keys(shoppingList).forEach((key) => {
        if (this.products[i].name === key && shoppingList[key]) {
          this.products.splice(i, 1);
        }
      });
    }
  }
}
