import { Component, OnInit } from '@angular/core';
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
  products = [
    {quantity: '1', measurementUnit: 'kg', name: 'kenyér'},
    {quantity: '3', measurementUnit: 'kg', name: 'krumpli'},
    {quantity: '6', measurementUnit: 'db', name: 'hagyma'},
    {quantity: '1', measurementUnit: 'db', name: 'margarin'},
    {quantity: '1', measurementUnit: 'l', name: 'tej'},
    {quantity: '5', measurementUnit: 'kg', name: 'narancs'},
    {quantity: '40', measurementUnit: 'dkg', name: 'felvágott'}
  ];

  constructor() {}

}
