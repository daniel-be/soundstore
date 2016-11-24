import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';

//Components
import { SongDetailComponent } from './components/song-detail.component';
import { DashboardComponent} from './components/dashboard.component';
import { RegisterComponent } from './components/register.component';
import { AlbumDetailComponent } from './components/album-detail.component';

//Services
import { SongService } from './services/song.service';
import { AlbumService } from './services/album.service';
import { UserService } from './services/user.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SongDetailComponent,
    DashboardComponent,
    RegisterComponent,
    AlbumDetailComponent
  ],
  providers: [
    SongService,
    AlbumService,
    UserService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
