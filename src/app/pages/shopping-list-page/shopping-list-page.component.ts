import { mergeMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/shopping-list.models';
import { Select, Store, ofActionSuccessful } from '@ngxs/store';
import { ShoppingList } from 'src/app/store/shopping-list.actions';
import { ShoppingListState } from 'src/app/store/shopping-list.state';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss']
})
export class ShoppingListPageComponent implements OnInit {

  @Select(ShoppingListState.products)
  products$?: Observable<Product[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ShoppingList.Get());
  }

  onAddItem(product: Product): void {
    this.store.dispatch(new ShoppingList.AddProduct(product)).subscribe(() => {
      this.store.dispatch(new ShoppingList.Get());
    });
  }

  onFinishShopping(shoppingList: Product[]): void {
    if (shoppingList.length > 0) {
      this.store.dispatch(new ShoppingList.FinishShopping(shoppingList)).subscribe(() => {
        this.store.dispatch(new ShoppingList.Get());
      });
    }
  }
}
