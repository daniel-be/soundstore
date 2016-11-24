import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Components
import { DashboardComponent } from '../components/dashboard.component';
import { SongDetailComponent } from '../components/song-detail.component';
import { RegisterComponent } from '../components/register.component';
import { AlbumDetailComponent } from '../components/album-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'song/:id', component: SongDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'album/:id', component: AlbumDetailComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
