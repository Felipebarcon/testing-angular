import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './root.component';
import { PersonneComponent } from './modules/personne/personne.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [RootComponent, PersonneComponent, FormulaireComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class RootModule {}
