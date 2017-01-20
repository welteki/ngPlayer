import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable()
export class PlayerService {
  private  sound: Howl;

  constructor() { }

  init(src: string) {
    this.sound = new Howl({src: src, onend: this.onEnd, preload: true})
  }

  play():void {
    this.sound.play();
  }

  pause():void {
    this.sound.pause();
  }

  stop():void {
    this.sound.stop();
  }

  onEnd(): void {
    console.log('track ended');
  }

}
