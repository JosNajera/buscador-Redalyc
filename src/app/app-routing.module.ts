// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaCompletaComponent } from './vista-completa/vista-completa.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FiltrosComponent } from './filtros/filtros.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'buscador', component: BuscadorComponent },
      { path: 'resultados', component: ResultadosComponent },
      { path: 'filtros', component:FiltrosComponent},
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'post/:id', component: VistaCompletaComponent },
      // Rutas que usan el layout en blanco
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
