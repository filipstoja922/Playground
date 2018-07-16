import { Oprema } from '../shared/oprema.model';

export class Konzola {
  public naziv: string;
  public opis: string;
  public imagePath: string;
  public oprema: Oprema[];

  constructor(naziv: string, opi: string, imagePath: string, oprema: Oprema[]) {
    this.naziv = naziv;
    this.opis = opi;
    this.imagePath = imagePath;
    this.oprema = oprema;
  }
}
