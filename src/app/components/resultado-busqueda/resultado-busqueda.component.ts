import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html'
})
export class ResultadoBusquedaComponent implements OnInit {

 empleados:any[];
    constructor(private activatedRoute:ActivatedRoute, private empleadosService:EmpleadosService) {
      this.activatedRoute.params.subscribe(params =>{
        console.log(`estoy en resultado de la busqueda
          y he obtenido ${params['termino']}`);
          this.empleadosService.buscarEmpleados(params['termino']).subscribe(respuesta =>{
            if(respuesta && respuesta.data) {
              console.log(respuesta);
              this.empleados = respuesta.data.content;
            }
          });
      })
    }

  ngOnInit() {
  }
}
