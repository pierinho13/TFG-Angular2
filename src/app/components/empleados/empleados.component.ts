import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html'
})
export class EmpleadosComponent implements OnInit {

  empleados:any[];
  mostrarJson:boolean = false;
  configuracionTabla = {
    actions : {
              title:"Acciones",
              add : false,
          },
    columns: {
      nombre: {
        title: 'Nombre'
      },
      apellidos: {
        title: 'Apellidos'
      },
      salario: {
        title: 'Salario'
      },
      rentabilidad: {
        title: 'Rentabilidad'
      },
      tipoEmpleado: {
        title: 'Tipo'
      },
      fechaNacimiento: {
        title: 'Fecha nacimiento',
        valuePrepareFunction: (fechaNacimiento) => {
         var fecha = new Date(fechaNacimiento);

         var formateado = this.datePipe.transform(fecha, 'dd MMM yyyy');
         return formateado;
       }
      },
      fechaAlta: {
        title: 'Fecha Alta',
        valuePrepareFunction: (fechaAlta) => {
         var fecha = new Date(fechaAlta);

         var formateado = this.datePipe.transform(fecha, 'dd MMM yyyy');
         return formateado;
       }
      },
     }
  };
  constructor(private empleadosService:EmpleadosService,private datePipe: DatePipe) { }

  ngOnInit() {

    this.empleadosService.getEmpleados().subscribe(respuesta =>{

      if(respuesta) {
        console.log(respuesta);
        this.empleados = respuesta.data;
      }
    });

  }
  cambiaMostrarJson(){
    this.mostrarJson = !this.mostrarJson;
  }
}
