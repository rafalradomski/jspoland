import { Injectable } from '@angular/core';
import {Hole} from './hole';
//import {setInterval} from "./timers";

@Injectable()
export class GameService {

  private holes: Hole[];
  private gameLoop;
  public score: number;
  public gameTime;

  constructor() {
    this.score = 0;
    this.holes = [];
    let len = 4;
    while (len--) {
      this.holes.push(new Hole())
    }
    this.startGame();
  }

  getHoles(){
    return this.holes;
  }

  startGame(){

    this.gameLoop = setInterval( ()=> {

      const index = Math.floor(Math.random() * this.holes.length);
      this.holes[index].state = 'up';

      this.gameTime =  new Date();

      setTimeout( () => {
        this.holes[index].state = '';
      }, 750);

    }, 1000)
  }

  hit(hole: Hole){

    if(hole.state === 'up') {

      clearInterval(this.gameLoop);
      hole.state = 'hit';
      this.score +=1;
      setTimeout(()=> {
        hole.state = '';
        console.log('hited');
        this.startGame();
      }, 1000)
    }
  }

  getTime(){
    return this.gameTime;
  }

}
