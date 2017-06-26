import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

datos:any;

  constructor(private empresaService:EmpresaService) { }

  ngOnInit() {
    this.empresaService.getInitData().subscribe(mensaje =>{

      if(mensaje) {
        console.log(mensaje);
        this.datos = mensaje.data;
      }
    });
  }

}
