import { Component } from '@angular/core';


@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.scss']
})

export class WhoweareComponent {
 
  constructor() { }

  ngOnInit() {

  }
  
  callApi() {
   console.log('welcome');
}
}