import { Component, OnInit } from '@angular/core';
import { PeupleApiService } from './services/peuple-api.service';
import Quidam from './services/quidam';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  hello = 'Hello World !'; // champ
  today = this.peupleapi.getDate();
  readonly default_age: number = 18;
  readonly default_name = 'John Doe';

  constructor(private peupleapi: PeupleApiService) {}

  peuple: Quidam[] = [];

  ngOnInit(): void {
    this.peupleapi.getAll().subscribe((data) => {
      this.peuple = data;
    });
  }

  supprime(id: number) {
    this.peupleapi.deleteQuidam(id).subscribe((q) => {
      console.log(q, 'Supprimé');
    });
  }
}
