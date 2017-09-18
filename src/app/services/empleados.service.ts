import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { SessionService} from './session.service';

@Injectable()
export class EmpleadosService {

  constructor(private http:Http, private sessionService:SessionService) { }

  getEmpleados() {
    console.log("estoy en get empleados");
    let url = `/app/empleados`;

    return this.http.get(url).map(respuesta=>{
      if( !this.sessionService.isValidSession(respuesta) ){
          this.sessionService.invalidSession();
          return;
      }
      console.log("respuesta es: ");
      console.log(respuesta.json());
      return  respuesta.json();
    });
  }
}
