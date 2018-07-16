import { Component, OnInit, Input } from '@angular/core';

import { Konzola } from '../../konzola.model';

@Component({
  selector: 'app-konzola-item',
  templateUrl: './konzola-item.component.html',
  styleUrls: ['./konzola-item.component.css']
})
export class KonzolaItemComponent implements OnInit {
  @Input() konzola: Konzola;
  @Input() index: number;

  ngOnInit() {
  }
}
