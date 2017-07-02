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
//para ng routes
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    APP_ROUTING
  ],
  providers: [
    EmpresaService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
