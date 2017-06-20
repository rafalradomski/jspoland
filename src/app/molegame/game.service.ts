import { Injectable } from '@angular/core';
import {Hole} from './hole';
import {setInterval} from "timers";

@Injectable()
export class GameService {

  private holes: Hole[];

  constructor() {
    this.holes = [];
    let len = 4;
    while (len--) {
      this.holes.push(new Hole())
    }
  }

  getHoles(){
    return this.holes;
  }

  startGame(){
    setInterval( ()=> {

      const index = Math.floor(Math.random() * this.holes.length);
      this.holes[index].state = 'up';

      setTimeout( () => {
        this.holes[index].state = '';
      }, 750);

    }, 1000)
  }

}
