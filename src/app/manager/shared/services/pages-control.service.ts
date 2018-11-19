import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from '../../../shared/core/base-api';
import { Page } from '../models/page.model';

@Injectable()
export class PagesControlService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getFullPages(): Observable<Page> {
    return this.get('admin/get_full_pages.adm.php');
  }

  addPage(): Observable<Page> {
    return this.post('admin/add_page.adm.php');
  }

  editPage(): Observable<Page> {
    return this.post('admin/edit_page.adm.php');
  }

/*  getPageById(id: number): Observable<Page> {
    return this.get('admin/get_page.adm.php', `id=${id}`);
  }*/

}
