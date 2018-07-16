import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Konzola } from '../konzola.model';
import { KonzolaService } from '../konzola.service';

@Component({
  selector: 'app-konzola-detalji',
  templateUrl: './konzola-detalji.component.html',
  styleUrls: ['./konzola-detalji.component.css']
})
export class KonzolaDetaljiComponent implements OnInit {
  konzola: Konzola;
  id: number;

  constructor(private konzolaService: KonzolaService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.konzola = this.konzolaService.getKonzolu(this.id);
        }
      );
  }


  onEditKonzola() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteKonzola() {
    this.konzolaService.deleteKonzolu(this.id);
    this.router.navigate(['/recipes']);
  }

}
