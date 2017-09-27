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

  editarEmpresa(e){
    console.log('Estoy en metodo editar empresa y lo que me llego es:');
    console.log(e);
    //let body = JSON.stringify(e);
    let formData : FormData = this.getFormDataFromJson( e );
    let headers = new Headers({
      'Content-Type':'application/json'
    });
  //  console.log(body);
    let url ='/app/update';
    console.log(`url es ${url}`);
    return this.http.put(url,formData).map(respuesta=>{ //,{headers:headers}
      if( !this.sessionService.isValidSession(respuesta) ){
          this.sessionService.invalidSession();
          return;
      }
      console.log(respuesta.json());
      return respuesta.json();
    })
  }

  private getFormDataFromJson( json : Object ) : FormData
  {
      let formData : FormData = new FormData();

      if( !json ) {

        return formData;
      }


      for( let i in json ) {

          if( !json.hasOwnProperty( i ) ) {

            continue;
          }


          if( Array.isArray( json[ i ] ) || typeof( json[ i ] ) == "object" ) {

              for( let x in json[ i ] ) {

                  if( !json[ i ].hasOwnProperty( x ) ) {

                      continue;
                  }

                  formData.append( i, json[ i ][ x ] );
                  console.log('Entro en append if');
              }
          }
          else {

              formData.append( i, json[ i ] );
              console.log('Entro en append else');
          }
      }
      console.log('from data es: ');
      console.log(formData);
      return formData;
  }
}
