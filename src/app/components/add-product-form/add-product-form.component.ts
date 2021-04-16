import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/shopping-list.models';

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

  @ViewChild('quantity')
  quantity!: any;

  @Output()
  addItem: EventEmitter<Product>;

  constructor() {
    this.addItem = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.addListItemForm.valid) {
      this.addItem.emit(this.addListItemForm.value);
      this.addListItemForm.reset();
      this.quantity.nativeElement.focus();
    }
  }

  onCancel(): void {
      this.addListItemForm.reset();
      this.addListItemForm.markAsPristine();
  }
}
