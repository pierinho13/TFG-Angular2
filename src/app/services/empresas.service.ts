import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EmpresaService {
  constructor(private http:Http) {
  }
  getHeroes(){
    return this.http.get('/ajustes/empresas/todos.json').map(res=>res.json());
  }
}
