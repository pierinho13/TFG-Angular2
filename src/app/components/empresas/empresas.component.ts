import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styles: []
})
export class EmpresasComponent implements OnInit {

  empresas:any[];

  constructor(private empresaService:EmpresaService) {
   }


  ngOnInit() {
  }

}
