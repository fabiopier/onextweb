import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  headerColumn: Number = 1;
  breakpointObserver_ : Subscription;
  books = [];

  constructor(private booksService: BooksService, breakpointObserver: BreakpointObserver) {
   this.breakpointObserver_=  breakpointObserver.observe(['(max-width: 1279.98px)']).subscribe(
      (result: BreakpointState) => {
        if (result.matches) {
          console.log('match');
          this.headerColumn = 2;
        } else {
          this.headerColumn = 1;
        }
      }
    )
  }

  ngOnInit() {
    this.configLayout();
    this.getBooks();
  }

  configLayout() {

  }

  getBooks() {
    this.booksService.getBooks()
      .subscribe(
        (data: any) => {
          console.log('ritorno dei books');
          console.log(JSON.stringify(data));
          this.books = data.data;


        },
        (err: HttpErrorResponse) => { console.log(err) });
  }

  callApi() {
    console.log('welcome');
  }

  ngOnDestroy() {
    this.breakpointObserver_.unsubscribe
    console.log('destroy');
  }

}