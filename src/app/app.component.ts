import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import './rxjs-operators';

import { DeezerService} from './shared/deezer.service';
import { PlayerService} from './shared/player.service';
import { Track } from './shared/models/track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tracks: Array<any>;
  selectedTrack: Track;
  menuOpen: boolean = false;
  isPlaying: boolean = false;

  constructor(private deezerService: DeezerService, private playerService: PlayerService){}

  ngOnInit() {
    this.deezerService.getChart()
                      .subscribe(tracks => this.tracks = tracks);
  }

  togglePlaylist():void {
    this.menuOpen = !this.menuOpen
  }

//   selectTrack(track: Track): void {
//     this.selectedTrack = track;
//     this.playerService.init(track.preview);
//   }
//
//   playTrack(playing):void {
//     this.playerService.play();
//     this.isPlaying = playing;
//   }
//
//   pauseTrack(playing):void {
//     this.playerService.pause();
//     this.isPlaying = playing;
//   }
//
//   stopTrack(playing):void {
//     this.playerService.stop();
//     this.isPlaying = playing;
//   }
}
