import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  addListItemForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    measurementUnit: new FormControl('', Validators.required)
  });

  @Output()
  addItem: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.addListItemForm.valid) {
      this.addItem.emit(this.addListItemForm.value);
      this.addListItemForm.reset();
    }
  }

  onCancel(): void {
      this.addListItemForm.reset();
  }
}
