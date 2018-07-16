import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { KonzolaService } from '../konzola/konzola.service';
import { Konzola } from '../konzola/konzola.model';
import { AuthService } from '../auth/auth.service';
import { RezervacijeService } from '../rezervacije-list/rezervacije.service';
import { Rezervacija } from '../shared/rezervacija.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: KonzolaService,
              private rezervacijeService: RezervacijeService,
              private authService: AuthService) {
  }

  storeKonzole() {
    const token = this.authService.getToken();
    return this.http.put('https://playground-77bb9.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getKonzole());
    
  }
  storeRezervacije() {
    const token = this.authService.getToken();
    return this.http.put('https://playground-77bb9.firebaseio.com/rezervacije.json?auth=' + token, this.rezervacijeService.getRezervacije());
  }
    

  getKonzole() {
    const token = this.authService.getToken();

    this.http.get('https://playground-77bb9.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Konzola[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['oprema']) {
              recipe['oprema'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Konzola[]) => {
          this.recipeService.setKonzole(recipes);
        }
      );
  }

  getRezervacije() {
    const token = this.authService.getToken();

    this.http.get('https://playground-77bb9.firebaseio.com/rezervacije.json?auth=' + token)
      .map(
        (response: Response) => {
          const rezervacije: Rezervacija[] = response.json();
          return rezervacije;
        }
      )
      .subscribe(
        (rezervacije: Rezervacija[]) => {
          this.rezervacijeService.setRezervacije(rezervacije);
        }
      );
  }
}
