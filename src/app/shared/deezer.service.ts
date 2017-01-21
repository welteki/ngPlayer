import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';

import { Track } from './models/track';
import { Observable }     from 'rxjs/rx';

@Injectable()
export class DeezerService {
  private baseUrl = 'https://api.deezer.com/chart?output=jsonp&callback=JSONP_CALLBACK' //URL to deezer API


  constructor(private jsonp: Jsonp) { }

  getChart(): Observable<Track[]> {
    let tracks = this.jsonp
      .get(this.baseUrl)
      .map(mapTracks);
    return tracks;
  }

 //  private extractData(res: Response) {
 //   let body = res.json();
 //   return body.tracks.data || { };
 // }

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
    cover_medium: r.album.cover_medium,
    isPlaying: false
  })
  console.log('Parsed track:', track);
  return track;
}
