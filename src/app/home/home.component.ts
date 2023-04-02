import { Component } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (public navigation: NavigationService){}

}
