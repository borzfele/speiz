import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Product {
  name: string;
  quantity: string;
  measurementUnit: string;
}

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input()
  products: Product[] = [];

  @Output()
  finishShopping: EventEmitter<any> = new EventEmitter();

  shoppingList: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.products.forEach((product) => {
      this.shoppingList.addControl(product.name, new FormControl(false));
    });
  }

  onSubmit(): void {
    this.finishShopping.emit(this.shoppingList.value);
  }
}
