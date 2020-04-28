import { Component, OnInit } from '@angular/core';

//Para poder usar el componente y la interfaz creada el modelo en Games.ts y usarlo crear el constructor de la linea 15
import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err) 
    )
  }

}
