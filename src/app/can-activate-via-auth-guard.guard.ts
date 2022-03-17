import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './servicios/api.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuardGuard implements CanActivate {

  constructor(private api:ApiService, private route:Router){
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.api.getActividad()){
        console.log('No estás logueado');
        this.route.navigate(['../login']);
        return false;
      }

      console.log("Estas Logeado Y tienes Token")

      return true;
  }
  
}
