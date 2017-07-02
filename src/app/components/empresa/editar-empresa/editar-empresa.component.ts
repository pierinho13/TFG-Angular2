import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../../services/empresas.service';
import {Router,ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html'
})
export class EditarEmpresaComponent implements OnInit {

  createForm : FormGroup;

  empresa:any = {
    nombre:"",
    nombreComercial:"",
    descripcion:"",
    actividad:"",
    ficticia:true,
    numeroEmpleados:0,
    sector:""
  }

  constructor(private empresaService:EmpresaService,private router:Router,
  private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.getDatosEmpresa();
  }

  getDatosEmpresa(){

    this.empresaService.getEmpresa().subscribe(mensaje =>{
      if(mensaje) {
        console.log(mensaje);
        this.iniciaDatosForm( mensaje.data );
      }
    });
  }

  private iniciaDatosForm( data : any ) : void  {

    this.createForm = this.formBuilder.group( this.getFieldsForm( data ) );
  }
  private getFieldsForm( data? : any )
{
    if( typeof( data ) == "undefined" || ! data ) {

        data = {};
    }

    let ret = {

        'id' : [ data.id || "" ],
        'nombre' : [ data.nombre || "" ],
        'nombreComercial' : [ data.nombreComercial || "" ],
        'descripcion' : [ data.descripcion || "" ],
        'actividad' : [ data.actividad || "" ],
        'numeroEmpleados' : [ data.numeroEmpleados || "" ],
        'sector' : [ data.sector || "" ]
    };

    return ret;
}
  guardar(data){
  //actualizando
  console.log('Data de metodo guardar es:');
  console.log(data);
    this.empresaService.editarEmpresa(data).subscribe(respuesta=>{
      console.log(respuesta);
      this.router.navigate(['/empresa']);
    })
  }
}
