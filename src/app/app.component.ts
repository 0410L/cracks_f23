import { Component } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app_cracks';

  constructor(public navigation: NavigationService){
    this.navigation.startSaveHistory();
  }

}
