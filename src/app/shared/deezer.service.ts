import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Track } from './models/track';
import { Observable }     from 'rxjs/rx';

@Injectable()
export class DeezerService {
  private baseUrl = 'https://api.deezer.com' //URL to deezer API

  constructor(private http: Http) { }

  getChart(): Observable<Track[]> {
    let tracks = this.http
      .get(this.baseUrl)
      .map(mapTracks);
    return tracks;
  }

}

function mapTracks(response:Response) {
  return response.json().tracks.data.map(toTrack)
}

function toTrack(r:any): Track{
  let track = <Track>({
    id: r.id,
    title: r.title,
    artist: r.artist.name,
    preview: r.preview,
    cover_small: r.album.cover_small,
    cover_medium: r.album.cover_medium
  })
  console.log('Parsed track:', track);
  return track;
}
