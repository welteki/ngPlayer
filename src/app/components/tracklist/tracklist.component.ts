import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Track } from '../../shared/models/track';

@Component({
  selector: 'tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistComponent {
  @Input() tracks: Track[];
  @Input() menuOpen: boolean;
  @Input() playing: boolean;
  @Input() index: number;
  @Output() selectTrack = new EventEmitter();
}
