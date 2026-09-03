import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { At1Component } from './at1/at1'; // <--- Importação necessária do componente

const routes: Routes = [
  { path: 'at1', component: At1Component } // <--- Nome correto: At1Component
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lista1RoutingModule { }