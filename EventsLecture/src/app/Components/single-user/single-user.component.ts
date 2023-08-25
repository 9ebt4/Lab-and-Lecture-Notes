import { Component, Input } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
@Input() person:User={} as User;
}
