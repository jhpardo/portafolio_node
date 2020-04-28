import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GameListComponent} from './components/game-list/game-list.component';

const routes: Routes = [
  {
    //Por el momento lo manejare como el ejemplo el inicio del app sera la ruta inicio
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
