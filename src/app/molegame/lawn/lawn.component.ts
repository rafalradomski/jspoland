import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-lawn',
  templateUrl: './lawn.component.html',
  styleUrls: ['./lawn.component.scss']
})
export class LawnComponent implements OnInit {

  public game: GameService;

  constructor(game: GameService) {
    this.game = game;
  }

  ngOnInit() {
  }

}
