import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

import { Page } from '../../shared/models/page.model';
import { PagesControlService } from '../../shared/services/pages-control.service';

@Component({
  selector: 'mul-adm-control-pages',
  templateUrl: './adm-control-pages.component.html',
  styleUrls: ['./adm-control-pages.component.css']
})
export class AdmControlPagesComponent implements OnInit, OnDestroy {

  pages: Page;
  page: Page;
  isLoadedTable = false;
  isLoadedForm = false;

  private subscr1: Subscription;
  private subscr2: Subscription;
  private subscr3: Subscription;

  constructor(private pagesControlService: PagesControlService) {}

  ngOnInit() {
    this.subscr1 = this.pagesControlService.getFullPages()
      /*.pipe(delay(3000))*/
      .subscribe((data: Page) => {
        this.pages = data;
        this.isLoadedTable = true;
      });
  }

  showFormPage(id: number) {
    this.isLoadedForm = true;
    this.page = this.pages[id - 1];
  }

  hideFormPage() {
    this.isLoadedForm = false;
  }

  addPage(dataPage: Page) {
    this.isLoadedForm = false;
    console.log(dataPage);

    this.subscr2 = this.pagesControlService.addPage(dataPage)
      .subscribe(data => console.log(data));
  }

  editPage(dataPage: Page) {
    this.isLoadedForm = false;
    console.log(dataPage);

    this.subscr3 = this.pagesControlService.editPage(dataPage)
      .subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    if (this.subscr1) this.subscr1.unsubscribe();
    if (this.subscr2) this.subscr2.unsubscribe();
    if (this.subscr3) this.subscr3.unsubscribe();
  }

}
