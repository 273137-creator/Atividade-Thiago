import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para ngModel nas próximas atividades[cite: 1, 2]
import { Lista1RoutingModule } from './lista1-routing-module';
import { At1Component } from './at1/at1';
import { At2Component } from './at2/at2'; // Nome correto da classe

@NgModule({
  declarations: [At1Component, At2Component],
  imports: [
    CommonModule,
    FormsModule, //[cite: 1, 2]
    Lista1RoutingModule,
  ],
  exports: [
  At1Component, // Permite usar <app-at1> no app.html
  At2Component, // Permite usar <app-at2> no app.html
],
})
export class Lista1Module {}
