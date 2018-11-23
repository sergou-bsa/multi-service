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

  addPage(pageContent: any): Observable<any> {  // попробовать вместо any - boolean
    return this.post('admin/add_page.adm.php', pageContent);
  }

  editPage(pageContent: any): Observable<any> {
    return this.post('admin/edit_page.adm.php', pageContent);
  }

  delPage(pageContent: any): Observable<any> {
    return this.post('admin/del_page.adm.php', pageContent);
  }

/*  getPageById(id: number): Observable<Page> {
    return this.get('admin/get_page.adm.php', `id=${id}`);
  }*/

}
