import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { LawnComponent } from './lawn/lawn.component';
import { HoleComponent } from './hole/hole.component';
import { GameService } from "./game.service";
import { ScorePipe } from './score.pipe';

@NgModule({
       imports: [CommonModule],
     providers: [GameService],
  declarations: [GameComponent, HeaderComponent, LawnComponent, HoleComponent, ScorePipe],
       exports: [GameComponent]
})
export class MolegameModule { }
