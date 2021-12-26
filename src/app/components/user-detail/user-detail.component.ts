import { Component, Input, OnInit } from '@angular/core';
//import { UserInterface } from '../../interfaces/user';
import { User } from 'src/app/classes/User';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {

  @Input()
  user!: User;

  constructor(private userService:UserService) {}

  ngOnInit() {}

  saveUser(){
    if(this.user.id > 0){
      this.userService.updateUser(this.user)
    }else{
     this.userService.createUser(this.user)
    }
  }
  resetForm(){
    if(this.user.id == 0){
       this.user = new User();
    }else{
      
    }
 }

}