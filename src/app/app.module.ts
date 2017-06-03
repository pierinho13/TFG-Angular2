import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import {EmpresaComponent} from './components/empresa/empresa.component';
//rutas
import {APP_ROUTING} from './app.routes';
//services
import {EmpresaService} from './services/empresas.service';
import { EmpresasComponent } from './components/empresas/empresas.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    EmpleadosComponent,
    EmpresaComponent,
    EmpresasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
