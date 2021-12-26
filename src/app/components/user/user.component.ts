import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from './../../classes/User';
//import { UserInterface } from '../../interfaces/user';
@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  //@Input('test') user: any; con alias
  // @Output() userDeleted: EventEmitter<any> = new EventEmitter();
  @Input() user: User| undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') userSelectUser = new EventEmitter();

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    //this.users = UserService.getUser();
  }

  deleteUser(user_: any){
    console.log('quando clicco sul pulsante chiamo la funzione e poi passo da padre in figlio con emit');
    //this.UserService.deleteUser(this.user)
    this.userDeleted.emit(this.user)
  }

  updateUser(user_: any){
    const useryCopy =Object.assign({},this.user)
    this.userSelectUser.emit(useryCopy)
  }

}
