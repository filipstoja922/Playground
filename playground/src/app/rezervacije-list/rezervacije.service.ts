
import { Rezervacija } from '../shared/rezervacija.model';
import { Subject } from 'rxjs/Subject';
import { DatePipe } from '@angular/common';


export class RezervacijeService {
  rezervacijeChanged = new Subject<Rezervacija[]>();
  startedEditing = new Subject<number>();
    private rezervacije: Rezervacija[] = [
      new Rezervacija('Marko', "Playstation 4",'Jun 15, 2017','Jun 29, 2017'),
      new Rezervacija('Dusan', "Xbox 360",'Jun 20, 2017','Jun 28, 2017')
    ];

    getRezervacije() {
        return this.rezervacije.slice();
      }

      getRezervaciju(index: number) {
        return this.rezervacije[index];
      }

      addRezervaciju(rezervacija: Rezervacija) {
        this.rezervacije.push(rezervacija);
        this.rezervacijeChanged.next(this.rezervacije.slice());
      }
      deleteOpremu(index: number) {
        this.rezervacije.splice(index, 1);
        this.rezervacijeChanged.next(this.rezervacije.slice());
      }
      setRezervacije(rezervacije: Rezervacija[]) {
        this.rezervacije = rezervacije;
        this.rezervacijeChanged.next(this.rezervacije.slice());
      }
      
      

}