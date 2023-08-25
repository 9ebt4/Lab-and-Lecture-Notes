import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { ListUsersComponent } from './Components/list-users/list-users.component';
import { SingleUserComponent } from './Components/single-user/single-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ListUsersComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
