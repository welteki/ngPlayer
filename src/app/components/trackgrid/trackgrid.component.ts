import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Track } from '../../shared/models/track';

@Component({
  selector: 'trackgrid',
  templateUrl: './trackgrid.component.html',
  styleUrls: ['./trackgrid.component.scss']
})
export class TrackgridComponent {
  @Input() tracks: Track[]
}
