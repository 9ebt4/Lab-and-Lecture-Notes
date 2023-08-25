import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  newUser:User={} as User;
@Output() UserCreated = new EventEmitter<User>();

CreateUser():void{
  this.UserCreated.emit(this.newUser);
  this.newUser={} as User;
}

}
