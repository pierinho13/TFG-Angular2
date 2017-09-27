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

  buscarEmpleados(termino:string){
    termino= termino.toLowerCase();
    console.log("estoy en buscarEmpleados");
    let url = `/app/empleados`;
    let data = { nombre : termino };
    console.log(`data es :
                ${data}`);
    let paramsConverted : Object = { "search" : this.getParamsFromJson( data ) };
    console.log(`paramsConverted es :
                ${paramsConverted}`);
    return this.http.get(url,paramsConverted).map(respuesta=>{
      if( !this.sessionService.isValidSession(respuesta) ){
          this.sessionService.invalidSession();
          return;
      }
      console.log("respuesta es: ");
      console.log(respuesta.json());
      return  respuesta.json();
    });
  }

  private getParamsFromJson( json : Object ) : string {
      if( ! json )

          return "";

      return Object.keys( json ).map( function( key ) {

          return encodeURIComponent( key ) + '=' + encodeURIComponent( json[ key ] );

      } ).join( '&' );
  }
}
