import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Konzola } from './konzola.model';
import { Oprema } from '../shared/oprema.model';

@Injectable()
export class KonzolaService {
  konzolaChanged = new Subject<Konzola[]>();

  private konzole: Konzola[] = [
      new Konzola('Playstation 4',
      'PlayStation 4 je za igrače koji žele da krenu na neverovatna putovanja kroz sveobuhvatne nove svetove i budu deo duboko povezane gejming zajednice. Sa izvanrednom postavkom igara koje su već dostupne - i mnogima koje su upravo u razvoju - PS4 je najbolje mesto za igranje najpopularnijih hit igara kao i inovativnih alternativnih naslova. ',
      'https://images-na.ssl-images-amazon.com/images/I/61ryVJLDlFL._SX385_.jpg',
      [
        new Oprema('Dzojstik', 4),
        new Oprema('Kabli', 1)
      ]),
      new Konzola('Xbox 360',
      'What else you need to say?',
      'https://rukminim1.flixcart.com/image/704/704/gamingconsole/c/r/4/xbox-360-4-microsoft-wireless-controller-original-imaeqcvaagdaax27.jpeg?q=70',
      [
        new Oprema('Dzojstik', 4),
        new Oprema('Kabli', 1),
        new Oprema('Igrice',20)
      ])
  ];

  constructor() {}

  setKonzole(konzole: Konzola[]) {
    this.konzole = konzole;
    this.konzolaChanged.next(this.konzole.slice());
  }

  getKonzole() {
    return this.konzole.slice();
  }

  getKonzolu(index: number) {
    return this.konzole[index];
  }

  addKonzolu(konzola: Konzola) {
    this.konzole.push(konzola);
    this.konzolaChanged.next(this.konzole.slice());
  }

  updateKonzolu(index: number, newKonzola: Konzola) {
    this.konzole[index] = newKonzola;
    this.konzolaChanged.next(this.konzole.slice());
  }

  deleteKonzolu(index: number) {
    this.konzole.splice(index, 1);
    this.konzolaChanged.next(this.konzole.slice());
  }
}
