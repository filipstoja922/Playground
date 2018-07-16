import { Component, OnInit, Output,ViewChild } from '@angular/core';
import { RezervacijeService } from './rezervacije.service';
import { Rezervacija } from '../shared/rezervacija.model';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-rezervacije-list',
  templateUrl: './rezervacije-list.component.html',
  styleUrls: ['./rezervacije-list.component.css']
})
export class RezervacijeListComponent implements OnInit {
  rezervacije: Rezervacija[];
  private subscription: Subscription;
  editedItemIndex: number;
  editedItem: Rezervacija;
  @ViewChild('f') rlForm: NgForm;
  constructor(private rlService: RezervacijeService,
              private authService: AuthService) { }

  ngOnInit() {
    this.rezervacije = this.rlService.getRezervacije();
    this.subscription = this.rlService.rezervacijeChanged
      .subscribe(
        (rezervacije: Rezervacija[]) => {
          this.rezervacije = rezervacije;
        }
      );
      this.subscription = this.rlService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editedItem = this.rlService.getRezervaciju(index);
        }
      );

      
  }

  onEditItem(index: number) {
    this.rlService.startedEditing.next(index);
  }

  onDelete() {
    this.rlService.deleteOpremu(this.editedItemIndex);
  }


}
