import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './historial/historial.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { VideoComponent } from './video/video.component';


// const routes: Routes = [
//   { path: '',
//     redirectTo: 'home',
//     pathMatch: 'full' },

//   { path: 'home/players/:id', component: PlayersComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'home/historial/:id', component: HistorialComponent },
//   { path: 'home/video/:id', component: VideoComponent },
//   { path: '**', redirectTo: 'home', pathMatch: 'full' },

// ];
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: '',
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: '',
        },
        component: HomeComponent,
      },
      {
        path: 'players/:id',
        data: {
          breadcrumb: 'players',
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null,
            },
            component: PlayersComponent,
          },
          {
            path: 'video',
            data: {
              breadcrumb: 'video',
            },
            children: [
              {
                path: '',
                data: {
                  breadcrumb: null,
                },
                component: VideoComponent,
              },
              {
                path: 'historial',
                data: {
                  breadcrumb: 'historial',
                },
                component: HistorialComponent,
              },
            ]
          }
        ],
      },
    ],
  },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
