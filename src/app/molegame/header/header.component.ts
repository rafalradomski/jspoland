import { Component, OnInit, Input } from '@angular/core';

@Component({
     selector: 'app-header',
  templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() score: number;
  @Input() time: Date;

}
