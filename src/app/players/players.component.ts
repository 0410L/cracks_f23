import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { Data } from '../interface.data';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  id : any;
  onePlayer : any;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private playerService : PlayersService) {
    this.route.params.subscribe(params => {this.id = params['id']});
    console.log(this.id);

    this.onePlayer=this.playerService.getPlayerOne(this.id);
    console.log(this.onePlayer)
  }

  goBack() {
    this.location.back();
  }
  goNext(){
    // this.router.navigate(['home/video/:id'])
  }

}

