import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from '../../../shared/core/base-api';
import { Menu } from '../models/menu.model';

@Injectable()
export class PageService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getItemsMenu(): Observable<Menu> {
    return this.get('client/get_items_menu.cli.php');
  }

}
