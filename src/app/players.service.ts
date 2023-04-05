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
    Clubactual: '',
    Clubanterior1: '',
    Clubanterior2: '',
    Clubanterior3: '',
    Clubanterior4: '',
    Clubanterior5: '',
    Aceleracion: 0,
    Velocidad: 0,
    Posicion: 0,
    Finalizacion: 0,
    Potenciadetiro: 0,
    Tiroslejanos: 0,
    Voleas: 0,
    Penaltis: 0,
    Visiondejuego: 0,
    Centros: 0,
    Precisiontirandofaltas: 0,
    Pasescortos: 0,
    Paseslargos: 0,
    Efecto: 0,
    Agilidad: 0,
    Equilibrio: 0,
    Reaccion: 0,
    ControldelBalon: 0,
    Regates: 0,
    Compostura: 0,
    Intercepciones: 0,
    Precisiondecabezazos: 0,
    Capacidaddefensiva: 0,
    Entradanormal: 0,
    Entradaagresiva: 0,
    Salto: 0,
    Resistencia: 0,
    Fuerza: 0,
    Agresividad: 0,
    url: '',
    length: 0,
    YoutubeVideo1: '',
    YoutubeVideo2: '',
    YoutubeVideo3: '',
    YoutubeVideo4: ''
  };

  id: any;
  es = json;

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

      Clubactual: 'F.C. Barcelona (2022-act)',
      Clubanterior1: 'F.C. Bayern (2014-2022)',
      Clubanterior2: 'B. V. Borussia (2010-2014)',
      Clubanterior3: 'Lech Poznań (2008-2010)',
      Clubanterior4: 'Znicz Pruszkow (2006-2008)',
      Clubanterior5: 'Legia de Varsovia II (2005-2006)',

      Aceleracion: '76',
      Velocidad: '75',
      Posicion: '94',
      Finalizacion: '94',
      Potenciadetiro: '91',
      Tiroslejanos: '84',
      Voleas: '89',
      Penaltis: '90',
      Visiondejuego: '81',
      Centros: '71',
      Precisiontirandofaltas: '85',
      Pasescortos: '84',
      Paseslargos: '70',
      Efecto: '79',
      Agilidad: '77',
      Equilibrio: '82',
      Reaccion: '93',
      ControldelBalon: '89',
      Regates: '85',
      Compostura: '88',
      Intercepciones: '49',
      Precisiondecabezazos: '91',
      Capacidaddefensiva: '35',
      Entradanormal: '42',
      Entradaagresiva: '19',
      Salto: '85',
      Resistencia: '76',
      Fuerza: '87',
      Agresividad: '81',
      photo:'LEWANDOSKI.png',
      YoutubeVideo1:'Y7mdgvlTlmo',
      YoutubeVideo2:'cm5wytys2Cg',
      YoutubeVideo3:'bO2Dhm0HwxI',
      YoutubeVideo4:'nWfitbySEbc',
      escudo1:'FCB.png',
      escudo2:'BAYERN.png',
      escudo3:'DORTMUND.png',
      escudo4:'LEGIA.png',
      escudo5:'LECHPOZNAN.png',
      url: 'LEWAN_F23.webp',
    },

    {
      id: '2',
      Nombre: 'Neymar jr',
      Apellido: 'da Silva',
      Edad: '31',
      Nacionalidad: 'Brasil',

      Clubactual: 'Paris Saint-Germain (2017-act)',
      Clubanterior1: 'F.C. Barcelona (2013-2017)',
      Clubanterior2: 'Santos F.C. (2009-2013)',
      Clubanterior3: '',
      Clubanterior4: '',
      Clubanterior5: '',

      Aceleracion: '88',
      Velocidad: '86',
      Posicion: '86',
      Finalizacion: '83',
      Potenciadetiro: '79',
      Tiroslejanos: '81',
      Voleas: '86',
      Penaltis: '91',
      Visiondejuego: '89',
      Centros: '84',
      Precisiontirandofaltas: '87',
      Pasescortos: '85',
      Paseslargos: '81',
      Efecto: '88',
      Agilidad: '93',
      Equilibrio: '82',
      Reaccion: '88',
      ControldelBalon: '94',
      Regates: '95',
      Compostura: '93',
      Intercepciones: '37',
      Precisiondecabezazos: '63',
      Capacidaddefensiva: '35',
      Entradanormal: '32',
      Entradaagresiva: '29',
      Salto: '62',
      Resistencia: '79',
      Fuerza: '52',
      Agresividad: '63',
      photo:'NEYMAR.png',
      YoutubeVideo1:'K2csY1cMpfA',
      YoutubeVideo2:'Dgm3nehX-n4',
      YoutubeVideo3:'whezEvRiUL0',
      YoutubeVideo4:'n4PzyhFYDAw',
      escudo1:'PARIS.png',
      escudo2:'FCB.png',
      escudo3:'SANTOS.png',
      escudo4:'0.png',
      escudo5:'0.png',
      url: 'NEYMAR_F23.webp',
    },

    {
      id: '3',
      Nombre: 'Joaquín',
      Apellido: 'Sánchez',
      Edad: '41',
      Nacionalidad: 'España',

      Clubactual: 'Real Betis Balompié (2015-Act.)',
      Clubanterior1: 'ACF Fiorentina (2013-15)',
      Clubanterior2: 'Málaga C. F. (2011-13)',
      Clubanterior3: 'Valencia C. F. (2006-11)',
      Clubanterior4: 'Real Betis Balompié (2000-06)',
      Clubanterior5: '',

      Aceleracion: '76',
      Velocidad: '75',
      Posicion: '94',
      Finalizacion: '94',
      Potenciadetiro: '91',
      Tiroslejanos: '84',
      Voleas: '89',
      Penaltis: '90',
      Visiondejuego: '81',
      Centros: '71',
      Precisiontirandofaltas: '85',
      Pasescortos: '84',
      Paseslargos: '70',
      Efecto: '79',
      Agilidad: '77',
      Equilibrio: '82',
      Reaccion: '93',
      ControldelBalon: '89',
      Regates: '85',
      Compostura: '88',
      Intercepciones: '49',
      Precisiondecabezazos: '91',
      Capacidaddefensiva: '35',
      Entradanormal: '42',
      Entradaagresiva: '19',
      Salto: '85',
      Resistencia: '76',
      Fuerza: '87',
      Agresividad: '81',
      photo:'JOAQUIN.png',
      YoutubeVideo1:'DwVl6cQczQU',
      YoutubeVideo2:'B8L-PE5ct5g',
      YoutubeVideo3:'jjAyTqhZOLw',
      YoutubeVideo4:'lhgOj5GD_z4',
      escudo1:'BETIS.png',
      escudo2:'FIORENTINA.png',
      escudo3:'MALAGA.png',
      escudo4:'VALENCIA.png',
      escudo5:'BETIS.png',
      url: 'JOAQUIN_F23.webp',
    },
    {
      id: '4',
      Nombre: 'Antoine',
      Apellido: 'Griezmann',
      Edad: '32',
      Nacionalidad: 'Francia',

      Clubactual: 'Atlético de Madrid (2022-Act.)',
      Clubanterior1: 'F. C. Barcelona (2019-22)',
      Clubanterior2: 'Atlético de Madrid (2014-19)',
      Clubanterior3: 'Real Sociedad (2009-14)',
      Clubanterior4: '',
      Clubanterior5: '',

      Aceleracion: '76',
      Velocidad: '75',
      Posicion: '94',
      Finalizacion: '94',
      Potenciadetiro: '91',
      Tiroslejanos: '84',
      Voleas: '89',
      Penaltis: '90',
      Visiondejuego: '81',
      Centros: '71',
      Precisiontirandofaltas: '85',
      Pasescortos: '84',
      Paseslargos: '70',
      Efecto: '79',
      Agilidad: '77',
      Equilibrio: '82',
      Reaccion: '93',
      ControldelBalon: '89',
      Regates: '85',
      Compostura: '88',
      Intercepciones: '49',
      Precisiondecabezazos: '91',
      Capacidaddefensiva: '35',
      Entradanormal: '42',
      Entradaagresiva: '19',
      Salto: '85',
      Resistencia: '76',
      Fuerza: '87',
      Agresividad: '81',
      photo:'GRIEZMANN.png',
      YoutubeVideo1:'9cdV74dfxkU',
      YoutubeVideo2:'dHhJRhZld94',
      YoutubeVideo3:'3u1qeSBWHpI',
      YoutubeVideo4:'JtuYdCAy1Y4',
      escudo1:'ATLETICO.png',
      escudo2:'FCB.png',
      escudo3:'ATLETICO.png',
      escudo4:'REALSOCIEDAD.png',
      escudo5:'0.png',
      url: 'GRIEZMANN_F23.webp',
    },
  ];
}
