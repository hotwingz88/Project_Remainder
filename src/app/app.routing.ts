import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent} from './components/profile/profile.component';
import { FriendsComponent} from './components/friends/friends.component';
import { UserComponent} from './components/user chat/user.component';
import { NoteComponent } from './components/note/note.component';
import { HelpComponent } from './components/help/help.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {AuthGuard} from './services/authGuard.service.client';
// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '' , component: HomepageComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'friends', component: FriendsComponent, canActivate: [AuthGuard]},
  { path : 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path : 'note', component: NoteComponent, canActivate: [AuthGuard]},
  { path : 'help', component: HelpComponent},
  { path : 'homepage', component: HomepageComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
