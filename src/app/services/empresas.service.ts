import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { AppResponse} from '../components/response/app-response.interface';

@Injectable()
export class EmpresaService {
  constructor(private http:Http) {
  }

  getDataPrueba() {
    console.log("estoy en getDataPrueba");
    let url = `/initial-data`;
    return this.http.get(url).map(respuesta=>{
      console.log("respuesta es: ");
      console.log(respuesta.json());
     return  respuesta.json();
    });
  }

  // initialData() : Observable<AppResponse>
  // {
  //
  //     return this.http.get( "/initial-data").map( ( _value  ) => {
  //         console.log("values es: ");
  //         console.log(_value);
  //         return _value.json();
  //
  //     } ).catch( ( _err : AppResponse ) => {
  //
  //         return Observable.throw( _err );
  //     } );
  // }
}
