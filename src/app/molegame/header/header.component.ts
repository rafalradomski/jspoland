import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-header',
  templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public score: number;
  public time;

  constructor() {
    this.score = 100;
    setInterval(()=> this.time = new Date(), 1000)
  }

  ngOnInit() {
  }

}
