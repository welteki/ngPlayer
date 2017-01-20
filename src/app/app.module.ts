import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DeezerService } from './shared/deezer.service';
import { PlayerService } from './shared/player.service';

import { AppComponent } from './app.component';
import { TracklistComponent } from './components/tracklist/tracklist.component';
import { PlayerComponent } from './components/player/player.component';
import { TrackgridComponent } from './components/trackgrid/trackgrid.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TracklistComponent,
    PlayerComponent,
    TrackgridComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DeezerService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
