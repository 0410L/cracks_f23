import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { Data } from '../interface.data';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  id : any;
  onePlayer : any;

  constructor(public location: Location, public router: Router, public route: ActivatedRoute, public playerService : PlayersService, public sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {this.id = params['id']});
    console.log(this.id);

    this.onePlayer=this.playerService.getPlayerOne(this.id);
    console.log(this.onePlayer)
  }

  goBack() {
    this.location.back();
  }
  goNext(){
    this.router.navigate(['home/historial/'+(this.id)])
  }


}
