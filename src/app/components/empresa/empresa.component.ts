import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../services/empresas.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: []
})
export class EmpresaComponent implements OnInit {

 empresa:any;

  constructor(private empresaService:EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresa().subscribe(mensaje =>{

      if(mensaje) {
        console.log(mensaje);
        this.empresa = mensaje.data;
      }
    });
  }
}
