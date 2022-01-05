import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import {
  MatGridListModule
} from '@angular/material/grid-list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  breakpointObserverLarge!: Subscription;
  breakpointObserverMedium! : Subscription;
  breakpointObserverSmall! : Subscription;
  


  servicesCols: Number = 1;
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

    //Breakpoints.Web
    this.breakpointObserverLarge=  this.breakpointObserver.observe(['(min-width: 960px)']).subscribe(
      (result: BreakpointState) => {
        if (result.matches) {
          console.log('match');
          this.servicesCols = 2;
        } 
      }
    )

    this.breakpointObserverMedium=  this.breakpointObserver.observe(['(max-width: 959.98px)']).subscribe(
      (result: BreakpointState) => {
        if (result.matches) {
          console.log('match');
          this.servicesCols = 1;
        } 
      }
    )

    this.breakpointObserverSmall =  this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(
      (result: BreakpointState) => {
        if (result.matches) {
          console.log('match');
          this.servicesCols = 1;
        } 
      }
    )


  }





  ngOnDestroy() {
    this.breakpointObserverLarge.unsubscribe();
    this.breakpointObserverMedium.unsubscribe();
    this.breakpointObserverSmall.unsubscribe();
    
    console.log('destroy');
  }

}