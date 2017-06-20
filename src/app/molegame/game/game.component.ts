import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
     selector: 'app-game',
  templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public game: GameService;

  constructor(game: GameService) {

    this.game = game;
    console.log(this.game.getHoles());
  }

  start(event){
    console.log(event);
  }

  ngOnInit() {
  }

}
