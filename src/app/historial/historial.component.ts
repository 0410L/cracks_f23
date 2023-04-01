import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

}
