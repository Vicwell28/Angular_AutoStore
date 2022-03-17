import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OffCanvasBarComponent } from './off-canvas-bar/off-canvas-bar.component';
import { ShowVehiculosComponent } from './show-vehiculos/show-vehiculos.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarseComponent } from './vistas/registrarse/registrarse.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DetallesVehiculoComponent } from './detalles-vehiculo/detalles-vehiculo.component';
import { AuthInterceptor } from './servicios/auth-interceptor';
import { CarritoCompraComponent } from './vistas/carrito-compra/carrito-compra.component';
import { CompraClientComponent } from './compra-client/compra-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OffCanvasBarComponent,
    ShowVehiculosComponent,
    HomeComponent,
    ErrorComponent,
    NosotrosComponent,
    PreguntasComponent,
    BusquedaComponent,
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrarseComponent,
    DashboardComponent,
    EditarComponent,
    DetallesVehiculoComponent,
    CarritoCompraComponent,
    CompraClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, 
      useClass : AuthInterceptor, 
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
