import { OnChanges, Output, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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
export class ShoppingListComponent implements OnInit, OnChanges {

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

  ngOnChanges(changes: SimpleChanges): void {
    this.products.forEach((product) => {
      this.shoppingList.addControl(product.name, new FormControl(false));
    });
  }

  onSubmit(): void {
    this.finishShopping.emit(this.shoppingList.value);
    this.shoppingList.reset();
  }
}
