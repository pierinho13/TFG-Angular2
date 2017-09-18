import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';////para que funcione FormGroup va el reactive
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import {EmpresaComponent} from './components/empresa/empresa.component';
import { EditarEmpresaComponent } from './components/empresa/editar-empresa/editar-empresa.component';
//rutas
import {APP_ROUTING} from './app.routes';
//services
import {SessionService} from './services/session.service';
import {EmpresaService} from './services/empresas.service';
import {EmpleadosService} from './services/empleados.service';
//para ng routes
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// para tabla
import { Ng2SmartTableModule } from 'ng2-smart-table';
//para formatear en tabka
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    EmpleadosComponent,
    EmpresaComponent,
    EmpresasComponent,
    SlideshowComponent,
    EditarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2SmartTableModule,
    APP_ROUTING
  ],
  providers: [
    EmpresaService,
    SessionService,
    EmpleadosService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
