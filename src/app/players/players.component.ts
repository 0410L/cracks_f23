import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}

