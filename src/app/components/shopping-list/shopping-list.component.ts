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

  showDelete: string | null;

  @Input()
  products: Product[] | null;

  @Output()
  finishShopping: EventEmitter<any> = new EventEmitter();

  @Output()
  removeProduct: EventEmitter<string> = new EventEmitter();

  shoppingList: FormGroup = new FormGroup({});

  constructor() {
    this.products = [];
    this.showDelete = null;
  }

  ngOnInit(): void {
    this.renderForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderForm();
  }

  onSubmit(): void {
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

  onMouseOver(productId: string): void {
    this.showDelete = productId;
  }

  onMouseLeave(): void {
    this.showDelete = null;
  }

  onRemoveProduct(productId: string): void {
      this.removeProduct.emit(productId);
  }
}
