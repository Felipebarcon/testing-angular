import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Personnage from '../models/personnage';
import { Validateurs, checkAge } from '../validators/validateurs';

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  personnage?: Personnage;

  personnageForm: FormGroup;
  constructor(private builder: FormBuilder) {
    this.personnageForm = builder.group({
      nom: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validateurs.checkNom(),
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.max(120),
        Validators.min(1),
        checkAge,
      ]),
    });
  }

  ngOnInit(): void {}

  get nom(): AbstractControl {
    return this.personnageForm.controls['nom'];
  }
  get age(): AbstractControl {
    return this.personnageForm.controls['age'];
  }

  updateNom() {
    if (this.personnage) {
      this.personnage.nom = this.nom.value;
    }
  }

  updateAge() {
    if (this.personnage) {
      this.personnage.age = this.age.value;
    }
  }

  changeAge(a: Date) {
    const auj = new Date();
    let decalage = auj.getMonth() < a.getMonth() ? 1 : 0;
    this.age.setValue(auj.getFullYear() - a.getFullYear() - decalage);
    this.creerPersonnage();
  }

  creerPersonnage() {
    if (this.personnageForm.valid) {
      this.personnage = new Personnage(this.nom.value, this.age.value);
    } else {
      throw 'Formulaire invalide';
    }
  }
}
