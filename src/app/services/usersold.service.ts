import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Injectable({
  providedIn: 'root'
})

export class UseroldService {


  readonly rootUrl = environment.rootUrl;

  constructor(private http: HttpClient) { }

  user_ = [
    {
      name: 'Hidran1',
      lastname: 'Arias1',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      name: 'Hidran2',
      lastname: 'Arias2',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      name: 'Hidran3',
      lastname: 'Arias3',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    },
    {
      name: 'Hidran4',
      lastname: 'Arias4',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43
    }
  ]
  getUsers() {
    return this.user_
  }

  deleteUser(user: any) {
   const index = this.user_.indexOf(user)
   if(index > -1){
       this.user_.splice(index,1)
   }
  }

  getPost() {
    const customHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get("https://jsonplaceholder.typicode.com/posts", { headers: customHeaders });
  }


  getBooks() {
    let data = { user: 'all' }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.rootUrl + '/books/getAll', data, { headers: reqHeader });
  }

}