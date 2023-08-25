import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
listUsers:User[]=[
  {
    firstName: "Ethan",
    lastName: "Thomas",
    password: "AgreatPassword"
  },
  {
    firstName: "Justin",
    lastName: "Jones",
    password: "12345"
  },
  {
    firstName: "Tommy",
    lastName: "Waalkes",
    password: "LongWaalkesOntheBeach"
  },
];

AddUser(user:User):void{
this.listUsers.push(user);
}
}
