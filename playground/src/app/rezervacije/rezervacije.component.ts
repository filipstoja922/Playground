import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { RezervacijeService } from '../rezervacije-list/rezervacije.service';
import { FormsModule,FormBuilder } from '@angular/forms';
import { Oprema } from '../shared/oprema.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Konzola } from '../konzola/konzola.model';
import { KonzolaService } from '../konzola/konzola.service';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-rezervacije',
  templateUrl: './rezervacije.component.html',
  styleUrls: ['./rezervacije.component.css'],
})
export class RezervacijeComponent implements OnInit {
  konzole: Konzola[];
  subscription: Subscription;
  rezervacijeForm: FormGroup;
  datumKreiranje = new EventEmitter<{any}>();

  constructor(private rezervacijeService: RezervacijeService,
              private dialogService:DialogService,
              private konzolaService: KonzolaService,
                private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.subscription = this.konzolaService.konzolaChanged
    .subscribe(
      (konzole: Konzola[]) => {
        this.konzole = konzole;
      }
    );
  this.konzole = this.konzolaService.getKonzole();
  }

 rezervacija() {

 }

  onSubmit() {
      this.rezervacijeService.addRezervaciju(this.rezervacijeForm.value);
      console.log(this.rezervacijeForm);
      this.showConfirm();
    }

  
    private initForm() {
      let rezName = '';
      let rezKonzola = '';
      let rezodDatum = '';
      let rezdoDatum = '';
  
      this.rezervacijeForm = new FormGroup({
        'name': new FormControl(rezName),
        'konzola': new FormControl(rezKonzola),
       'odDatum': new FormControl(rezodDatum),
       'doDatum': new FormControl(rezdoDatum)
      });
    }

    showConfirm() {
      let disposable = this.dialogService.addDialog(ConfirmComponent, {
          title:'Obavestenje', 
          message:'Rezervacija je uspesno prihvacena!!'})
          .subscribe((isConfirmed)=>{
              //We get dialog result
              if(isConfirmed) {
              }
              else {
                  alert('declined');
              }
          });
      //We can close dialog calling disposable.unsubscribe();
      //If dialog was not closed manually close it by timeout
      setTimeout(()=>{
          disposable.unsubscribe();
      },10000);
  }
    
    
}
