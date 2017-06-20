import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game/game.component';
import { HeaderComponent } from './header/header.component';
import { LawnComponent } from './lawn/lawn.component';
import { HoleComponent } from './hole/hole.component';
import { GameService } from "./game.service";

@NgModule({
       imports: [CommonModule],
     providers: [GameService],
  declarations: [GameComponent, HeaderComponent, LawnComponent, HoleComponent],
       exports: [GameComponent]
})
export class MolegameModule { }
