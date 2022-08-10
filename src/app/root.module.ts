import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './root.component';
import { PersonneComponent } from './modules/personne/personne.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RootComponent, PersonneComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [RootComponent],
})
export class RootModule {}
