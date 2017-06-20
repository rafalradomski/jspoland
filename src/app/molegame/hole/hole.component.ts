import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Hole} from '../hole';

@Component({
     selector: 'app-hole',
  templateUrl: './hole.component.html',
    styleUrls: ['./hole.component.scss']
})
export class HoleComponent {

  @Input() hole: Hole;
  @Output() hit = new EventEmitter();


}
