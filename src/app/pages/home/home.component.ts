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
  breakpointObserver_! : Subscription;
  books = [];

  constructor(private booksService: BooksService, private breakpointObserver: BreakpointObserver) {


  }

  ngOnInit() {
    this.breakpointObserverLayout();
    this.getBooks();
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


  breakpointObserverLayout() {
    /*
    XSmall	(max-width: 599.98px)
    Small	(min-width: 600px) and (max-width: 959.98px)
    Medium	(min-width: 960px) and (max-width: 1279.98px)
    Large	(min-width: 1280px) and (max-width: 1919.98px)
    XLarge	(min-width: 1920px)
    Handset	(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)
    Tablet	(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)
    Web	(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)
    HandsetPortrait	(max-width: 599.98px) and (orientation: portrait)
    TabletPortrait	(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)
    WebPortrait	(min-width: 840px) and (orientation: portrait)
    HandsetLandscape	(max-width: 959.98px) and (orientation: landscape)
    TabletLandscape	(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)
    WebLandscape	(min-width: 1280px) and (orientation: landscape)
  */ 

    this.breakpointObserver_=  this.breakpointObserver.observe([Breakpoints.Web]).subscribe(
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





  ngOnDestroy() {
    this.breakpointObserver_.unsubscribe
    console.log('destroy');
  }

}