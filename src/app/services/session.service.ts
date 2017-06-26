import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class SessionService
{
    constructor( private router : Router )
    {

    }

    invalidSession() : void
    {
      console.log('Error. No tienes la sesión iniciada. Serás redirigido a la página de login');
      window.location.href='/logout';
    }

    isValidSession( res : Response ) : boolean {
      try
      {
          if( res && res.text() && res.text().indexOf( 'data-login="PAGINA_DE_LOGIN"' ) != -1 )

              return false;
      }
      catch( err )
      {

      }

      return true;
  }
}
