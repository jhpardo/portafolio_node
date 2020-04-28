import { Injectable } from '@angular/core';

//Modulo para poder pedir datos para pedirlo debo instanciarlo en la linea 16 (private http..)
import { HttpClient } from '@angular/common/http';
//Importando interfaz que se creo para la linea 29
import {Game} from '../../models/Games';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  //Se guarda la URL del servidor: se cambia si tiene una direccion IP o un domini
  API_URL = 'http://localhost:4444/api'

  constructor(private http: HttpClient) { }

  //Pedir datos que tengo en el servidor -inicio
  //Todos los datos de game
  getGames(){
    return this.http.get(`${this.API_URL}/games`);
  }
  //Dato especifico game por ID 
  getGame(id: string){
    return this.http.get(`${this.API_URL}/games/${id}`);
  }

  //Antes de guardar debo tener creada una interfaz en models con estos datos
  saveGame(game: Game){
    return this.http.post(`${this.API_URL}/games`, game);
  }

  //Eliminar juego especifico
  deleteGame(id: string){
    return this.http.delete(`${this.API_URL}/games/${id}`);
  }

  //Actualizar juego 
  updateGame(id: string, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URL}/games/${id}`, updatedGame);
  }

  //Pedir datos que tengo en el servidor -fin
}
