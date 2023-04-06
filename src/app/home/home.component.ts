import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  @Input() item: any;

  constructor (
    public navigation: NavigationService,
    public translate: TranslateService)
    {
    
      this.setAppLang();
    
    }

    setAppLang():void{
      this.translate.setDefaultLang('es');
      this.translate.use(this.translate.getBrowserLang()!);
    }


  ngOnInit(): void {};

}
