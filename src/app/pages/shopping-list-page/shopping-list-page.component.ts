import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { ShoppingList, ShoppingListStatus, ShoppingListTableHeader } from 'src/app/models/shopping-list.models';
import { TableDataSource } from 'src/app/util/util';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss']
})
export class ShoppingListPageComponent {

  shoppingLists: ShoppingList[];

  dataSource: DataSource<ShoppingList>;

  columns: string[] = ['id', 'name', 'creation', 'status'];
  headers: ShoppingListTableHeader = {
    id: 'ID',
    name: 'Name',
    creation: 'Creation',
    status: 'Status'
  };

  constructor() {
    this.shoppingLists = [
      {
        id: '1',
        name: 'Bolognai',
        creation: new Date('2021-04-20'),
        status: ShoppingListStatus.Active
      },
      {
        id: '2',
        name: 'Moody Waters',
        creation: new Date('2021-04-20'),
        status: ShoppingListStatus.Active
      },
      {
        id: '3',
        name: '420',
        creation: new Date('2021-04-20'),
        status: ShoppingListStatus.Active
      },
      {
        id: '4',
        name: 'Kenyér',
        creation: new Date('2021-04-20'),
        status: ShoppingListStatus.Active
      },
      {
        id: '5',
        name: 'Telkezés',
        creation: new Date('2021-04-20'),
        status: ShoppingListStatus.Active
      },
      {
        id: '6',
        name: 'Túra',
        creation: new Date('2021-04-20'),
        status: ShoppingListStatus.Active
      }
    ];
    this.dataSource = new TableDataSource(this.shoppingLists);
  }
}
