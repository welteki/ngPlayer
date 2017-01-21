import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { DeezerService } from './shared/deezer.service';
import { PlayerService } from './shared/player.service';

import { AppComponent } from './app.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';
import { PlayerComponent } from './components/player/player.component';
import { TrackgridComponent } from './components/trackgrid/trackgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    TracklistComponent,
    PlayerComponent,
    TrackgridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [DeezerService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
