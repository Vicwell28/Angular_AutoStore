import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ShowVehiculosComponent } from './show-vehiculos/show-vehiculos.component';

const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'Vehiculos', component: ShowVehiculosComponent},
    {path:'Nosotros', component: NosotrosComponent},
    {path:'Preguntas', component: PreguntasComponent},
    {path:'Busqueda', component: BusquedaComponent},
    {path:'Vehiculos', component: ShowVehiculosComponent},
    {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
