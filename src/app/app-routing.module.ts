import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CanActivateViaAuthGuardGuard } from './can-activate-via-auth-guard.guard';
import { DetallesVehiculoComponent } from './detalles-vehiculo/detalles-vehiculo.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ShowVehiculosComponent } from './show-vehiculos/show-vehiculos.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarritoCompraComponent } from './vistas/carrito-compra/carrito-compra.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarseComponent } from './vistas/registrarse/registrarse.component';

const routes: Routes = [
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {path:'home', component: HomeComponent,canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'Vehiculos', component: ShowVehiculosComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'Nosotros', component: NosotrosComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'Preguntas', component: PreguntasComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'Busqueda', component: BusquedaComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'login', component: LoginComponent},
    {path:'registrar', component: RegistrarseComponent},
    {path:'dashbord', component: DashboardComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'editar', component: EditarComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'detalles/vehiculo/:id', component: DetallesVehiculoComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'carrito-compra/:id', component: CarritoCompraComponent, canActivate: [CanActivateViaAuthGuardGuard]},
    {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
