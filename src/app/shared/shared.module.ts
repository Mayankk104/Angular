import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatchPasswordDirective } from '../directives/validators/match-password.directive';
import { PasswprdPatternDirective } from '../directives/validators/passwprd-pattern.directive';



@NgModule({
  declarations: [
    MatchPasswordDirective,
    PasswprdPatternDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatchPasswordDirective,
    PasswprdPatternDirective
  ]
})
export class SharedModule { }
