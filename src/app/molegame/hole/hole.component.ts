import { Component, OnInit, Input } from '@angular/core';
import {Hole} from '../hole';

@Component({
     selector: 'app-hole',
  templateUrl: './hole.component.html',
    styleUrls: ['./hole.component.scss']
})
export class HoleComponent {

   @Input()

   public hole: Hole;


}
