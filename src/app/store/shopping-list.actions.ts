import { Product } from './../models/shopping-list.models';
// tslint:disable-next-line: no-namespace
export namespace ShoppingList {

  export class Get {
    static readonly type = '[ShoppingListPage] Get Shopping List';
    constructor() {}
  }

  export class AddProduct {
    static readonly type = '[ShoppingListPage] Add Product';
    constructor(public product: Product) {}
  }

  export class FinishShopping {
    static readonly type = '[ShoppingListPage] Finish Shopping';
    constructor(public productList: Product[]) {}
  }

  export class RemoveProduct {
    static readonly type = '[ShoppingListPage] Remove Product';
    constructor(public productId: number) {}
  }
}
