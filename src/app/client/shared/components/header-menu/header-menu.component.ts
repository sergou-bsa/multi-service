import { Component, OnInit } from '@angular/core';

import { PageService } from '../../services/page.service';
import { Menu } from '../../models/menu.model';
import { Message } from '../../../../shared/models/message.model';
import {delay} from 'rxjs/internal/operators';

@Component({
  selector: 'mul-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  menuItInfrastructure: [Menu];
  menuServiceSupport: [Menu];
  message: Message;

  isLoadedPage = false;

  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.pageService.getItemsMenu()
      .pipe(delay(3000))
      .subscribe((menu: Menu) => {

        this.message = new Message('Тестовое сообщение!!!');
        this.message.delayMessage();

        this.menuItInfrastructure = menu[0];
        this.menuServiceSupport = menu[1];
        this.isLoadedPage = true;
      });
  }

}
