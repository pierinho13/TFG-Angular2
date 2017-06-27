import { Injectable } from '@angular/core';

@Injectable()
export class AppHttpService {
  constructor() {  }

  private getFormDataFromJson( json : Object ) : FormData
  {
      let formData : FormData = new FormData();

      if( ! json ) {

        return formData;
      }


      for( let i in json ) {

          if( ! json.hasOwnProperty( i ) ) {

            continue;
          }


          if( Array.isArray( json[ i ] ) || typeof( json[ i ] ) == "object" ) {

              for( let x in json[ i ] ) {

                  if( ! json[ i ].hasOwnProperty( x ) ) {

                      continue;
                  }

                  formData.append( i, json[ i ][ x ] );
              }
          }
          else {

              formData.append( i, json[ i ] );
          }
      }

      return formData;
  }
}
