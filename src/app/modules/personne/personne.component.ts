import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import Personnage from '../../models/personnage';

@Component({
  selector: 'itta-person',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit, OnChanges {
  @Input()
  nom?: string = '';

  @Input()
  age?: number;

  readonly age_minimum = 0;

  personnage?: Personnage; // = new Personnage(this.nom, 0);

  change(event: any) {
    if (this.personnage) {
      switch (event.target.id) {
        case 'nom':
          this.personnage.nom = event.target.value;
          break;
        case 'age':
          this.personnage.age = event.target.value;
          break;
      }
    }
  }

  sig_msg: string = '';
  verifSignature(event: any) {
    this.sig_msg = '';
    this.red = '';
    const sig = event.target.value;
    if (event.key == ' ') {
      event.preventDefault();
      this.sig_msg = 'Caractère non autorisé';
      this.red = 'rouge';
    }
  }

  cancel(event: any) {
    event.preventDefault();
  }

  red: string = '';

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      console.log(key, '=', changes[key]);
    }
    // console.log(changes['nom']);
  }

  ngOnInit(): void {
    if (this.nom && this.age)
      this.personnage = new Personnage(this.nom, this.age);
  }
}
