import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { Data } from '../interface.data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {

  id : any;
  onePlayer : any;

  constructor(public location: Location, public router: Router, public route: ActivatedRoute, public playerService : PlayersService) {
    this.route.params.subscribe(params => {this.id = params['id']});
    console.log(this.id); 
    this.onePlayer=this.playerService.getPlayerOne(this.id);
    console.log(this.onePlayer)
  }


  goBack() {
    this.location.back();
  }


}

