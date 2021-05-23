import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { TableHeader } from 'src/app/models/shopping-list.models';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input()
  headers: TableHeader = [];

  @Input()
  columns: string[] = [];

  @Input()
  dataSource!: DataSource<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
