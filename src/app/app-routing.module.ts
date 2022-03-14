import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { DetallesVehiculoComponent } from './detalles-vehiculo/detalles-vehiculo.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ShowVehiculosComponent } from './show-vehiculos/show-vehiculos.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarseComponent } from './vistas/registrarse/registrarse.component';

const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch: 'full'},
    {path:'', component: HomeComponent},
    {path:'Vehiculos', component: ShowVehiculosComponent},
    {path:'Nosotros', component: NosotrosComponent},
    {path:'Preguntas', component: PreguntasComponent},
    {path:'Busqueda', component: BusquedaComponent},
    {path:'Vehiculos', component: ShowVehiculosComponent},
    {path:'login', component: LoginComponent},
    {path:'registrar', component: RegistrarseComponent},
    {path:'dashbord', component: DashboardComponent},
    {path:'editar', component: EditarComponent},
    {path:'detalles/vehiculo/:id', component: DetallesVehiculoComponent},
    {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
