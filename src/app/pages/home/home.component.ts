import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
 
  constructor(private booksService: BooksService) { }

  books = [];
  
  ngOnInit() {
    this.getBooks();   
 }

 getBooks(){
   this.booksService.getBooks()
   .subscribe(
     (data: any) => {
       console.log('ritorno dei books');
       console.log(JSON.stringify(data));
       this.books = data.data;
       
   
     },
     (err: HttpErrorResponse) => {console.log(err)});
 }
  
  callApi() {
   console.log('welcome');
}
}