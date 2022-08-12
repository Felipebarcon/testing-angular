import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Personnage from '../../models/personnage';

@Component({
  selector: 'itta-person',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent implements OnInit, OnChanges {
  @ViewChild('input_age', { static: true })
  input_age?: any;

  @Input()
  nom?: string = '';

  private _age?: number;

  @Input()
  public get age(): number {
    return this._age ?? 0;
  }

  public set age(value: number) {
    let input = this.input_age.nativeElement as HTMLInputElement;
    input.setCustomValidity('');
    if (value < 0) {
      input.setCustomValidity('Age trop petit');
    }
    if (input.validity.valid) {
      this._age = value;
      if (this.personnage) {
        this.personnage.age = value;
      }
    }
  }

  // validation age <= 140

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
    }
    // console.log(changes['nom']);
  }

  ngOnInit(): void {
    if (this.nom && this.age)
      this.personnage = new Personnage(this.nom, this.age);
  }
}
