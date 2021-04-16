import { ShoppingListService } from './../services/shopping-list-service/shopping-list.service';
import { Injectable } from '@angular/core';
import { Action, ofActionSuccessful, Selector, State, StateContext, Store } from '@ngxs/store';
import { Product, ShoppingListStateModel } from '../models/shopping-list.models';
import { ShoppingList } from './shopping-list.actions';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@State<ShoppingListStateModel>({
  name: 'shoppingList',
  defaults: {
    products: []
  }
})
@Injectable()
export class ShoppingListState {
  constructor(
    private store: Store,
    private shoppingListService: ShoppingListService
  ) {}

  @Selector()
  static products(state: ShoppingListStateModel): Product[] {
    return state.products;
  }

  @Action(ShoppingList.Get)
  getShoppingList(ctx: StateContext<ShoppingListStateModel>): void {
    this.shoppingListService.getShoppingList().subscribe((response) => {
      ctx.patchState({products: response});
    });
  }

  @Action(ShoppingList.AddProduct)
  addProductToShoppingList(
    ctx: StateContext<ShoppingListStateModel>,
    action: ShoppingList.AddProduct
  ): Observable<any> {
    return this.shoppingListService.postShoppingListItem(action.product);
  }

  @Action(ShoppingList.FinishShopping)
  removeShoppingListItem(
    ctx: StateContext<ShoppingListStateModel>,
    action: ShoppingList.FinishShopping
  ): Observable<any> {
    return this.shoppingListService.finishShopping(action.productList);
  }
}
