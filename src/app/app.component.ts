import { Component, OnInit, EventEmitter } from '@angular/core';
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
  index:number; // keep track of index;
  menuOpen: boolean = false;
  isPlaying: boolean = false;


  constructor(private deezerService: DeezerService, private playerService: PlayerService) { }

  togglePlaylist():void {
    this.menuOpen = !this.menuOpen
  }

  ngOnInit() {
    this.deezerService.getChart()
                      .subscribe(tracks => this.getTracks(tracks));
    let event = this.playerService.playerEvents;
    event.onEnd$
         .subscribe(event$ => this.onEnd());
    event.playing$
         .subscribe(event$ => this.playing(event$));
  }

  getTracks(tracks):void {
    this.tracks = tracks;
    this.playerService.init(tracks);
  }

  selectTrack(i):void {
    this.playerService.playNew(i);
    this.index = i;
  }

  play() {
    this.playerService.play();
  }

  pause() {
    this.playerService.pause();
  }

  stop() {
    if(this.isPlaying) {
        this.playerService.pause();
    }
  }

  next() {
    this.playerService.playNext();
  }

  previous() {
    this.playerService.playPrevious();
  }

  playing(playing) {
    this.isPlaying = playing;
    console.log('playing toggeled:', this.isPlaying);
  }

  onEnd() {
    this.playerService.playNext();
    this.index += 1;
    // console.log('onEnd$ fired');
  }
}
