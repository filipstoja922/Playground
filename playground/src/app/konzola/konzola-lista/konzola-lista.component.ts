import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Konzola } from '../konzola.model';
import { KonzolaService } from '../konzola.service';

@Component({
  selector: 'app-konzola-lista',
  templateUrl: './konzola-lista.component.html',
  styleUrls: ['./konzola-lista.component.css']
})
export class KonzolaListaComponent implements OnInit, OnDestroy {
  konzole: Konzola[];
  subscription: Subscription;

  constructor(private konzolaService: KonzolaService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.konzolaService.konzolaChanged
      .subscribe(
        (konzole: Konzola[]) => {
          this.konzole = konzole;
        }
      );
    this.konzole = this.konzolaService.getKonzole();
  }

  onNewKonzola() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
