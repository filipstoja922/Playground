import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { KonzolaService } from '../konzola.service';

@Component({
  selector: 'app-konzola-izmena',
  templateUrl: './konzola-izmena.component.html',
  styleUrls: ['./konzola-izmena.component.css']
})
export class KonzolaIzmenaComponent implements OnInit {
  id: number;
  editMode = false;
  konzolaForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private konzolaService: KonzolaService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.konzolaService.updateKonzolu(this.id, this.konzolaForm.value);
    } else {
      this.konzolaService.addKonzolu(this.konzolaForm.value);
    }
    this.onCancel();
  }

  onAddOprema() {
    (<FormArray>this.konzolaForm.get('oprema')).push(
      new FormGroup({
        'naziv': new FormControl(null, Validators.required),
        'broj': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteOprema(index: number) {
    (<FormArray>this.konzolaForm.get('oprema')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let konzolaNaziv = '';
    let konzolaImagePath = '';
    let konzolaOpis = '';
    let konzolaOprema = new FormArray([]);

    if (this.editMode) {
      const konzola = this.konzolaService.getKonzolu(this.id);
      konzolaNaziv = konzola.naziv;
      konzolaImagePath = konzola.imagePath;
      konzolaOpis = konzola.opis;
      if (konzola['oprema']) {
        for (let oprema of konzola.oprema) {
          konzolaOprema.push(
            new FormGroup({
              'naziv': new FormControl(oprema.naziv, Validators.required),
              'broj': new FormControl(oprema.broj, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.konzolaForm = new FormGroup({
      'naziv': new FormControl(konzolaNaziv, Validators.required),
      'imagePath': new FormControl(konzolaImagePath, Validators.required),
      'opis': new FormControl(konzolaOpis, Validators.required),
      'oprema': konzolaOprema
    });
  }

}
