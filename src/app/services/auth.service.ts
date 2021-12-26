import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isUserLogged = false;

  constructor(public fb: FormBuilder,  private router: Router) { }

  isUserLoggedIn() {
    if (localStorage.getItem('userToken') != null) {
      this.isUserLogged = true;
    };
    return this.isUserLogged;
  }

  signIn(email: String, password: string) { }

  signUp(username: string, email: String, password: string) { }
  
}
