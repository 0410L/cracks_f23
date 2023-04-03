import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  constructor(private location: Location, private router: Router) { }

  goBack() {
    this.location.back();
  }
  goNext(){
    this.router.navigate(['home/historial/:id'])
  }


}
