export interface Product {
  id: string;
  product: string;
  quantity: string;
  measurement_unit: string;
}

export interface ShoppingListStateModel {
  products: Product[];
}
