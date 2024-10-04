import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EliminarCadenaPipe } from './pipes/eliminar-cadena.pipe';
import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { SearchService } from './services/busqueda.service';
import { ConsumirService } from './services/consumir.service';
import { VistaCompletaComponent } from './vista-completa/vista-completa.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    FiltrosComponent,
    ResultadosComponent,
    EliminarCadenaPipe,
    StripHtmlPipe,
    VistaCompletaComponent,
    DefaultLayoutComponent,
    BlankLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ConsumirService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
