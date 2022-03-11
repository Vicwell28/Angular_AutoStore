import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OffCanvasBarComponent } from './off-canvas-bar/off-canvas-bar.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ShowVehiculosComponent } from './show-vehiculos/show-vehiculos.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OffCanvasBarComponent,
    ModalLoginComponent,
    ShowVehiculosComponent,
    HomeComponent,
    ErrorComponent,
    NosotrosComponent,
    PreguntasComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
