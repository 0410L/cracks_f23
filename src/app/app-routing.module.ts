import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './historial/historial.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home/players/:id', component: PlayersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/historial/:id', component: HistorialComponent },
  { path: 'home/video/:id', component: VideoComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
