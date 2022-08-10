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