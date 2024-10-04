import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumirService {
  constructor(private http: HttpClient) { }

  getData(apiUrl: string, page: number = 1, searchTerm: string = ''): Observable<HttpResponse<any[]>> {
    let params = new HttpParams().set('page', page.toString());

    if (searchTerm) {
      params = params.set('search', searchTerm);
    }

    return this.http.get<any[]>(apiUrl, { params, observe: 'response' });
  }

  getPostById(apiUrl: string, id: number | string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
