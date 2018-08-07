import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { Routing } from './app.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { UserComponent } from './components/user chat/user.component';
import { NoteComponent } from './components/note/note.component';
import { HelpComponent } from './components/help/help.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserService } from './services/user.service.client';
import {SharedService} from './services/shared.service.client';
import {AuthGuard} from './services/authGuard.service.client';
import { NoteService } from './services/note.service.client';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    FriendsComponent,
    UserComponent,
    NoteComponent,
    HelpComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule
  ],
  providers: [UserService,
              SharedService,
              AuthGuard,
              NoteService],
               
  bootstrap: [AppComponent]
})
export class AppModule { }
