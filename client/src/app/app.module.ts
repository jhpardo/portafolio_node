import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para poder hacer peticiones se necesita el HttpClientModule
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

//Optendra los metodos para pedir  datos
import {GamesService} from './services/games/games.service';
import { BackgroundComponent } from './components/background/background.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    GameFormComponent,
    GameListComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
