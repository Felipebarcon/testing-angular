import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent {
  hello = 'Hello World !'; // champ
  today = new Date();
  readonly default_age: number = 18;
  readonly default_name = 'John Doe';
}
