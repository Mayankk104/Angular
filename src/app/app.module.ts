import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './pages/forms/forms.component';
import { MatchPasswordDirective } from './directives/validators/match-password.directive';
import { PasswprdPatternDirective } from './directives/validators/passwprd-pattern.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    MatchPasswordDirective,
    PasswprdPatternDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
