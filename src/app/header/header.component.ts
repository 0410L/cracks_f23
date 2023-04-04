import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationService } from 'src/app/navigation.service';
import * as json from 'data.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor (public translateservice : TranslateService){
    translateservice.setDefaultLang('es');
  }

  switchEnglish(language: string){
    this.translateservice.use(language)
  }

  switchSpain(language: string){
    this.translateservice.use(language)
  }

  switchCatala(language: string){
    this.translateservice.use(language)
  }

  es = json;

}
