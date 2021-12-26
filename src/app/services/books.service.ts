import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BooksService {
  
  readonly rootUrl = ''//environment.rootUrl;

  constructor(private http: HttpClient) { }  

  getBooks() {
    let data = {
      user: 'all'
  }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/books/getAll',data, { headers: reqHeader });
  }
  
}
