import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}
