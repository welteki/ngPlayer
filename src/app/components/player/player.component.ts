import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() isPlaying: boolean;
  @Output() play = new EventEmitter;
  @Output() pause = new EventEmitter;
  @Output() stop = new EventEmitter;
  @Output() previous = new EventEmitter;
  @Output() next = new EventEmitter;

  togglePlay():void {
    if (this.isPlaying) {
      this.pause.emit(null);
    } else {
      this.play.emit(null);
    }
  }
}
