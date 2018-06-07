import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component'
import { Routing } from './app.routing';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { UserComponent } from './components/user chat/user.component';
import { NoteComponent } from './components/note/note.component';
import { HelpComponent } from './components/help/help.component';
import { HomepageComponent } from './components/homepage/homepage.component';

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
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
