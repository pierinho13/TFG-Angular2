import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarEmpleado(termino:string){
    console.log(`resultado del buscador es ${termino}`);
    this.router.navigate(['/resultadoBusqueda',termino]);
  }
  logout(){
    window.location.href='/logout';
  }
}
