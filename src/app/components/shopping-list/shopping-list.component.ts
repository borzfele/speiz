import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
export class ShoppingListComponent {
  columnsToDisplay = ['quantity', 'measurementUnit', 'name'];

  @Input()
  products: Product[] = [];

  constructor() {}

  onSubmit(): void {
    console.log("picsafüst");
  }
}
