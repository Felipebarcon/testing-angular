import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SuperDate } from './SuperDate';
@Component({
  selector: 'super-date',
  templateUrl: './super-date.component.html',
  styleUrls: ['./super-date.component.css'],
})
export class SuperDateComponent implements OnInit {
  constructor() {}

  readonly minimumDate = new Date().getFullYear() - 119;

  ladate?: Date;
  private _jour?: number;
  private _mois?: number;
  private _annee?: number;

  @Output()
  changeDate: EventEmitter<SuperDate> = new EventEmitter<SuperDate>();

  public get jour(): number {
    return this._jour ?? 0;
  }
  public set jour(value: number) {
    this._jour = value;
    this.create_date();
  }
  public get mois(): number {
    return this._mois ?? -1;
  }
  public set mois(value: number) {
    this._mois = value;
    this.create_date();
  }
  public get annee(): number | undefined {
    return this._annee;
  }
  public set annee(value: number | undefined) {
    this._annee = value;
    this.create_date();
  }

  create_date() {
    if (this.isValid_date(this.annee, this.mois, this.jour)) {
      this.ladate = new Date(this.annee!, this.mois, this.jour);
      this.changeDate.emit({ date: this.ladate, age: this.age });
    } else {
      throw 'Erreur de date ' + `${this.annee} - ${this.mois} - ${this.jour}`;
    }
  }

  Month(num: number): string {
    return new Date(2000, num, 1).toLocaleDateString('default', {
      month: 'long',
    });
  }
  get age(): number {
    const auj = new Date();
    if (this.ladate) {
      const decalage =
        auj.getMonth() < this.ladate.getMonth()
          ? 1
          : auj.getDate() < this.ladate.getDate()
          ? 1
          : 0;
      return auj.getFullYear() - this.ladate.getFullYear() - decalage;
    }
    throw 'Date is not correct';
  }

  isValid_date(annee: number | undefined, mois: number, jour: number) {
    if (jour == 0 || !annee) {
      return false;
    }
    const d = new Date(annee, mois, jour);
    return d.getDate() == jour;
  }

  ngOnInit(): void {}
}
