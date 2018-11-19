import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseApi {

  private baseUrl = 'http://multi-service.local/';

  constructor(public http: HttpClient) {}

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = '', paramsString: string = ''): Observable<any> {
    const params = new HttpParams({
      fromString: paramsString.toString()
    })
    return this.http.get(this.getUrl(url), {params});
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data);
  }

}
