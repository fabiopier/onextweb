import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor() { }

  ngOnInit() {
    this.callApi();
  }
  
  callApi() {
    console.log('first method 2'); 
  }
}
