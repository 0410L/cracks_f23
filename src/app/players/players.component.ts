import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  id : any;
  onePlayer : any;

  constructor(
    public location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public playerService : PlayersService,
    public translate: TranslateService) 
    {
      
    this.route.params.subscribe(params => {this.id = params['id']});
    // console.log(this.id);

    this.onePlayer=this.playerService.getPlayerOne(this.id);
    //console.log(this.onePlayer)

    this.setAppLang();
  }

  setAppLang():void{
    this.translate.setDefaultLang('es');
    this.translate.use(this.translate.getBrowserLang()!);
  }

  goBack() {
    this.location.back();
  }
  // goNext(){
  //   this.router.navigate(['players/'+(this.id)+'/video/'])
  // }

}

