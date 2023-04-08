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

  constructor(
    public location: Location, 
    public router: Router,
    public route: ActivatedRoute,
    public playerService : PlayersService,
    public sanitizer: DomSanitizer,
    public translate: TranslateService) {

    this.route.params.subscribe(params => {this.id = params['id']});
    // console.log(this.id);

    this.onePlayer=this.playerService.getPlayerOne(this.id);
    // console.log(this.onePlayer)

    this.setAppLang();

  }

  setAppLang():void{
    this.translate.setDefaultLang('es');
    this.translate.use(this.translate.getBrowserLang()!);
  }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
    const language = localStorage.getItem('language');
    if (language) {
      this.translate.use(language);
    } else {
      this.translate.setDefaultLang('es');
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }


}
