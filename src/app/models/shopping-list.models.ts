export interface Product {
  id: string;
  product: string;
  quantity: string;
  measurement_unit: string;
}

export enum ShoppingListStatus {
  Active,
  InProgress,
  Archived
}

export interface ShoppingList {
  id: string;
  name: string;
  creation: Date;
  status: ShoppingListStatus;
}

export interface TableHeader {
}

export interface ShoppingListTableHeader extends TableHeader {
  id: string;
  name: string;
  creation: string;
  status: string;
}

export interface ShoppingListStateModel {
  products: Product[];
}
