import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KonzolaComponent } from './konzola/konzola.component';
import { KonzolaListaComponent } from './konzola/konzola-lista/konzola-lista.component';
import { KonzolaDetaljiComponent } from './konzola/konzola-detalji/konzola-detalji.component';
import { KonzolaItemComponent } from './konzola/konzola-lista/konzola-item/konzola-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { KonzolaStartComponent } from './konzola/konzola-start/konzola-start.component';
import { KonzolaIzmenaComponent } from './konzola/konzola-izmena/konzola-izmena.component';
import { KonzolaService } from './konzola/konzola.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RezervacijeComponent } from './rezervacije/rezervacije.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { RezervacijeListComponent } from './rezervacije-list/rezervacije-list.component';
import {RezervacijeService } from './rezervacije-list/rezervacije.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KonzolaComponent,
    KonzolaListaComponent,
    KonzolaDetaljiComponent,
    KonzolaItemComponent,
    DropdownDirective,
    KonzolaStartComponent,
    KonzolaIzmenaComponent,
    SignupComponent,
    SigninComponent,
    RezervacijeComponent,
    RezervacijeListComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BootstrapModalModule
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [KonzolaService, DataStorageService, AuthService, AuthGuard, RezervacijeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
