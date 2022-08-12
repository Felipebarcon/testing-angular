import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './root.component';
import { PersonneComponent } from './modules/personne/personne.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { SuperDateComponent } from './super-date/super-date.component';
import { AlertDirective } from './directives/alert.directive';
import { Alert2Directive } from './directives/alert2.directive';

@NgModule({
  declarations: [
    RootComponent,
    PersonneComponent,
    FormulaireComponent,
    SuperDateComponent,
    AlertDirective,
    Alert2Directive,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class RootModule {}
