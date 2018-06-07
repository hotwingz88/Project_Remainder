import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { RegisterComponent } from './components/register/register.component'
import { ProfileComponent} from './components/profile/profile.component'
import { FriendsComponent} from './components/friends/friends.component'
import { UserComponent} from './components/user chat/user.component'
import { NoteComponent } from './components/note/note.component'
import { HelpComponent } from './components/help/help.component'
import { HomepageComponent } from './components/homepage/homepage.component'
// Import all other components here 

const APP_ROUTES : Routes = [
  { path : '' , component: HomepageComponent},
  { path : 'register' , component:RegisterComponent },
  { path : 'profile', component: ProfileComponent},
  { path : 'friends', component: FriendsComponent},
  { path : 'user', component: UserComponent},
  { path : 'note', component: NoteComponent},
  { path : 'help', component: HelpComponent},
  { path : 'homepage', component: HomepageComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
