import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {EmpleadosComponent} from './components/empleados/empleados.component';
import {EmpresasComponent} from './components/empresas/empresas.component';
import {EmpresaComponent} from './components/empresa/empresa.component';
import {EditarEmpresaComponent} from './components/empresa/editar-empresa/editar-empresa.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'empresa/editar/:id', component: EditarEmpresaComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
