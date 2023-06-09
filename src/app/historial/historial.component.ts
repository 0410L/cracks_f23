import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

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
  
    this.setAppLang();
  }

  ngOnInit(): void {
    this.onePlayer=this.playerService.getPlayerOne(this.id);
    const language = localStorage.getItem('language');
    if (language) {
      this.translate.use(language);
    } else {
      this.translate.setDefaultLang('es');
    }
    // console.log(this.onePlayer)
  }

  
  setAppLang():void{
    this.translate.setDefaultLang('es');
    this.translate.use(this.translate.getBrowserLang()!);
  }

  goBack() {
    this.location.back();
  }


  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

}

