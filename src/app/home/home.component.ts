import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';
import { Data } from '../interface.data';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  @Input() item: any;


  // es: any = {
  //   players: [], id: 0, Nombre: '', Apellido: '', Edad: 0, Nacionalidad: '', Club_actual: '', Club_anterior_1: '', Club_anterior_2: '', Club_anterior_3: '', Club_anterior_4: '', Club_anterior_5: '', Aceleración: 0, Velocidad: 0, Posición: 0, Finalización: 0, Potencia_de_tiro: 0, Tiros_lejanos: 0, Voleas: 0, Penaltis: 0, Visión_de_juego: 0, Centros: 0, Precisión_tirando_faltas: 0, Pases_cortos: 0, Pases_largos: 0, Efecto: 0, Agilidad: 0, Equilibrio: 0, Reacción: 0, Control_del_Balón: 0, Regates: 0, Compostura: 0, Intercepciones: 0, Precisión_de_cabezazos: 0, Capacidad_defensiva: 0, Entrada_normal: 0, Entrada_agresiva: 0, Salto: 0, Resistencia: 0, Fuerza: 0, Agresividad: 0, url: '',
  //   length: 0
  // };

  constructor (public navigation: NavigationService, private router: Router){

 
    // setTimeout(() => {
    //   this.es = playerService.data;
    //   console.log(this.es)
    // }, 1000);
  }
  
  ngOnInit(): void {};

  // verJugador(id:any):void{
  //   this.router.navigate(['players/',id])
  // }
  
  
}
