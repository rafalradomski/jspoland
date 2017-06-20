import { Component, OnInit, Input } from '@angular/core';

@Component({
     selector: 'app-header',
  templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() score: number;
  public time;

  constructor() {
    setInterval(()=> this.time = new Date(), 1000)
  }

  ngOnInit() {
  }

}
