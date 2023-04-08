import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import * as json from 'data.json';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {}

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
