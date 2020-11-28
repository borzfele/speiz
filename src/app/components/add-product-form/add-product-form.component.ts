import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  shoppingList: Product[] = [];

  addListItemForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    measurementUnit: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.shoppingList.push(this.addListItemForm.value);
  }
}
