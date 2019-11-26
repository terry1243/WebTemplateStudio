﻿import { Component, OnInit } from '@angular/core';

import { ListService } from './list.service';
import { IListItem } from './list.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private listItems$: Subject<IListItem[]> = new Subject();
  warningMessageText = 'Request to get list items failed:';
  warningMessageOpen = false;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems(){
    this.listService.getListItems().subscribe(
      (listItem:IListItem[])=>{this.listItems$.next(listItem)},
      error => this.handleError(`Request to get list items failed: ${error}`)
    );
  }

  addItem(inputText: string) {
    this.listService.addListItem(inputText).subscribe(
      ()=> this.loadItems(), error => this.handleError(`Request to add item failed: ${error}`)
    );
  }

  deleteItem(id: number) {
    this.listService.deleteListItem(id).subscribe(
      () => this.loadItems(), error => this.handleError(`Request to delete item failed: ${error}`)
    );
  }

  handleWarningClose(open: boolean) {
    this.warningMessageOpen = open;
    this.warningMessageText = '';
  }

  private handleError(warningMessageText:string) {
    this.warningMessageOpen = true;
    this.warningMessageText = warningMessageText;
  }
}
