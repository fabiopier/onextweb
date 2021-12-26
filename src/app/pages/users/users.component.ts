import { User } from '../../classes/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  public users: User[] = [];
  userSelected= false;
  userSelectedObject = new User();

  constructor(private service: UserService) { 
   
  }

  ngOnInit():void {
    this.users = this.service.getUsers();
  }

  deleteUserParent(user:User){
    console.log('DA FIGLIO A PADRE EVENTO');
    this.service.deleteUser(user);
  }

  selectUserParent(user:User){
    console.log('aggiornamento');
    console.log(user);
    this.userSelectedObject =user;
    this.userSelected = true;
  }

  

  newUser(){
    this.userSelectedObject = new User();
    this.userSelected = true;
    console.log('crea un nuovo utente');
  }

  title = 'ums';

}

