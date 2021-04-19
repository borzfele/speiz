import { Product } from './../../models/shopping-list.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ShoppingListService {

  constructor(private http: HttpClient) { }

  getShoppingList(): Observable<any> {
    return this.http.get('http://localhost:3000/shopping-list');
  }

  postShoppingListItem(product: Product): Observable<any> {
    return this.http.post('http://localhost:3000/product', product);
  }

  finishShopping(products: Product[]): Observable<any> {
    return this.http.post('http://localhost:3000/finish', products);
  }

  removeProduct(productId: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/product/${productId}`);
  }
}
