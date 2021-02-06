import { OnChanges, Output, SimpleChanges } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/models/shopping-list.models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnChanges {

  @Input()
  products: Product[] | null;

  @Output()
  finishShopping: EventEmitter<any> = new EventEmitter();

  shoppingList: FormGroup = new FormGroup({});

  constructor() {
    this.products = [];
  }

  ngOnInit(): void {
    this.renderForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderForm();
  }

  onSubmit(): void {
    console.log(this.shoppingList.value);
    const purchasedProducts =
      Object.keys(this.shoppingList.value).filter(key => this.shoppingList.value[key] === true);
    this.finishShopping.emit(purchasedProducts);
    this.shoppingList.reset();
  }

  renderForm(): void {
    if (this.products) {
      this.products.forEach((product) => {
        this.shoppingList.addControl(product.id, new FormControl(false));
      });
    }
  }
}
