import { Component, OnInit } from '@angular/core';
import { UseroldService } from '../../services/usersold.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-usersold',
  templateUrl: './usersold.component.html',
  styleUrls: ['./usersold.component.scss']
})

export class UsersoldComponent implements OnInit {
  public users: any[] = [];
  public posts: any[] = [];
  books: any;

  constructor(private service: UseroldService) { 
   
  }

  ngOnInit() {
    this.users = this.service.getUsers();
    this.getPost();
    //this.getBooks();
    console.log(this.posts);
    this.callApi();
  }

  title = 'ums';
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

 
  getPost(){
   this.service.getPost().subscribe(
      (data: any) => {
        console.log('ritorno dei post');
        console.log(JSON.stringify(data));
        this.books = data.data;
      },
      (err: HttpErrorResponse) => {console.log(err)});
  }
  getBooks(){
    this.service.getBooks().subscribe(
      (data: any) => {
        console.log('ritorno dei books');
        console.log(JSON.stringify(data));
        this.books = data.data;
      },
      (err: HttpErrorResponse) => {console.log(err)});
  }


  callApi() {
    console.log('first method 2');
  
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {  response.json() })
      .then((json) => {  console.log(json) });
  }
}
