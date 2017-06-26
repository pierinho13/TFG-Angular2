import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { AppResponse} from '../components/response/app-response.interface';
import { SessionService} from './session.service';

@Injectable()
export class EmpresaService {
  constructor(private http:Http, private sessionService:SessionService) {
  }

  getInitData() {
    console.log("estoy en getInitData");
    let url = `/initial-data`;

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

  getEmpresa() {
    console.log("estoy en getInitData");
    let url = `/app/empresa`;

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
