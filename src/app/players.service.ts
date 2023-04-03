import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { Data } from './interface.data';
import * as json from 'data.json';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private url = 'data.json';
  public data: Data = {
    players: [],
    id: '0',
    Nombre: '',
    Apellido: '',
    Edad: 0,
    Nacionalidad: '',
    Club_actual: '',
    Club_anterior_1: '',
    Club_anterior_2: '',
    Club_anterior_3: '',
    Club_anterior_4: '',
    Club_anterior_5: '',
    Aceleracion: 0,
    Velocidad: 0,
    Posicion: 0,
    Finalizacion: 0,
    Potencia_de_tiro: 0,
    Tiros_lejanos: 0,
    Voleas: 0,
    Penaltis: 0,
    Vision_de_juego: 0,
    Centros: 0,
    Precision_tirando_faltas: 0,
    Pases_cortos: 0,
    Pases_largos: 0,
    Efecto: 0,
    Agilidad: 0,
    Equilibrio: 0,
    Reaccion: 0,
    Control_del_Balon: 0,
    Regates: 0,
    Compostura: 0,
    Intercepciones: 0,
    Precision_de_cabezazos: 0,
    Capacidad_defensiva: 0,
    Entrada_normal: 0,
    Entrada_agresiva: 0,
    Salto: 0,
    Resistencia: 0,
    Fuerza: 0,
    Agresividad: 0,
    url: '',
    length: 0,
  };

  id: any;
  es = json;

  // 1 = this.es.players.1;
  // 2 = this.es.players.2;
  // 3 = this.es.players.3;
  // 4 = this.es.players.4;

  constructor(private http: HttpClient) {
    this.getPlayers();
  }

  getPlayers(): void {
    if (this.data.length < 1) {
      this.http
        .get(this.url)
        .pipe(map((response: any) => response.players))
        .subscribe((data) => {
          console.log(data);
          this.data = data;
        });
    }
  }

  getPlayerOne(id: any) {
    console.log(id);
    // const test = this.players.find((player: any) => {
    //   player.id == id;
    // });
    const test = this.players[id-1]
    console.log(test)
    return test;
  }

  players: any[] = [
    {
      id: '1',
      Nombre: 'Robert',
      Apellido: 'Lewandoski',
      Edad: '34',
      Nacionalidad: 'Polonia',

      Club_actual: 'F.C. Barcelona (2022-act)',
      Club_anterior_1: 'F.C. Bayern (2014-2022)',
      Club_anterior_2: 'B. V. Borussia (2010-2014)',
      Club_anterior_3: 'Lech Poznań (2008-2010)',
      Club_anterior_4: 'Znicz Pruszkow (2006-2008)',
      Club_anterior_5: 'Legia de Varsovia II (2005-2006)',

      Aceleracion: '76',
      Velocidad: '75',
      Posicion: '94',
      Finalizacion: '94',
      Potencia_de_tiro: '91',
      Tiros_lejanos: '84',
      Voleas: '89',
      Penaltis: '90',
      Vision_de_juego: '81',
      Centros: '71',
      Precision_tirando_faltas: '85',
      Pases_cortos: '84',
      Pases_largos: '70',
      Efecto: '79',
      Agilidad: '77',
      Equilibrio: '82',
      Reaccion: '93',
      Control_del_Balon: '89',
      Regates: '85',
      Compostura: '88',
      Intercepciones: '49',
      Precision_de_cabezazos: '91',
      Capacidad_defensiva: '35',
      Entrada_normal: '42',
      Entrada_agresiva: '19',
      Salto: '85',
      Resistencia: '76',
      Fuerza: '87',
      Agresividad: '81',
      photo:'LEWANDOSKI.png',

      url: 'LEWAN_F23.webp',
    },

    {
      id: '2',
      Nombre: 'Neymar jr',
      Apellido: 'da Silva',
      Edad: '31',
      Nacionalidad: 'Brasil',

      Club_actual: 'Paris Saint-Germain (2017-act)',
      Club_anterior_1: 'F.C. Barcelona (2013-2017)',
      Club_anterior_2: 'Santos F.C. (2009-2013)',
      Club_anterior_3: '',
      Club_anterior_4: '',
      Club_anterior_5: '',

      Aceleracion: '88',
      Velocidad: '86',
      Posicion: '86',
      Finalizacion: '83',
      Potencia_de_tiro: '79',
      Tiros_lejanos: '81',
      Voleas: '86',
      Penaltis: '91',
      Vision_de_juego: '89',
      Centros: '84',
      Precision_tirando_faltas: '87',
      Pases_cortos: '85',
      Pases_largos: '81',
      Efecto: '88',
      Agilidad: '93',
      Equilibrio: '82',
      Reaccion: '88',
      Control_del_Balon: '94',
      Regates: '95',
      Compostura: '93',
      Intercepciones: '37',
      Precision_de_cabezazos: '63',
      Capacidad_defensiva: '35',
      Entrada_normal: '32',
      Entrada_agresiva: '29',
      Salto: '62',
      Resistencia: '79',
      Fuerza: '52',
      Agresividad: '63',
      photo:'NEYMAR.png',

      url: 'NEYMAR_F23.webp',
    },

    {
      id: '3',
      Nombre: 'Joaquín',
      Apellido: 'Sánchez',
      Edad: '41',
      Nacionalidad: 'España',

      Club_actual: 'Real Betis Balompié (2015-Act.)',
      Club_anterior_1: 'ACF Fiorentina (2013-15)',
      Club_anterior_2: 'Málaga C. F. (2011-13)',
      Club_anterior_3: 'Valencia C. F. (2006-11)',
      Club_anterior_4: 'Real Betis Balompié (2000-06)',
      Club_anterior_5: '',

      Aceleracion: '76',
      Velocidad: '75',
      Posicion: '94',
      Finalizacion: '94',
      Potencia_de_tiro: '91',
      Tiros_lejanos: '84',
      Voleas: '89',
      Penaltis: '90',
      Vision_de_juego: '81',
      Centros: '71',
      Precision_tirando_faltas: '85',
      Pases_cortos: '84',
      Pases_largos: '70',
      Efecto: '79',
      Agilidad: '77',
      Equilibrio: '82',
      Reaccion: '93',
      Control_del_Balon: '89',
      Regates: '85',
      Compostura: '88',
      Intercepciones: '49',
      Precision_de_cabezazos: '91',
      Capacidad_defensiva: '35',
      Entrada_normal: '42',
      Entrada_agresiva: '19',
      Salto: '85',
      Resistencia: '76',
      Fuerza: '87',
      Agresividad: '81',
      photo:'JOAQUIN.png',

      url: 'JOAQUIN_F23.webp',
    },
    {
      id: '4',
      Nombre: 'Antoine',
      Apellido: 'Griezmann',
      Edad: '32',
      Nacionalidad: 'Francia',

      Club_actual: 'Atlético de Madrid (2022-Act.)',
      Club_anterior_1: 'F. C. Barcelona (2019-22)',
      Club_anterior_2: 'Atlético de Madrid (2014-19)',
      Club_anterior_3: 'Real Sociedad (2009-14)',
      Club_anterior_4: '',
      Club_anterior_5: '',

      Aceleracion: '76',
      Velocidad: '75',
      Posicion: '94',
      Finalizacion: '94',
      Potencia_de_tiro: '91',
      Tiros_lejanos: '84',
      Voleas: '89',
      Penaltis: '90',
      Vision_de_juego: '81',
      Centros: '71',
      Precision_tirando_faltas: '85',
      Pases_cortos: '84',
      Pases_largos: '70',
      Efecto: '79',
      Agilidad: '77',
      Equilibrio: '82',
      Reaccion: '93',
      Control_del_Balon: '89',
      Regates: '85',
      Compostura: '88',
      Intercepciones: '49',
      Precision_de_cabezazos: '91',
      Capacidad_defensiva: '35',
      Entrada_normal: '42',
      Entrada_agresiva: '19',
      Salto: '85',
      Resistencia: '76',
      Fuerza: '87',
      Agresividad: '81',
      photo:'GRIEZMANN.jpg',

      url: 'GRIEZMANN_F23.webp',
    },
  ];
}
