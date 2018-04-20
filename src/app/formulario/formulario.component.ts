import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit,OnDestroy {

private usuario:string;
private password:string;


  constructor(private _log:FormularioService, private router:Router) { }

  ValidarUsuario(){
      if(this._log.logUsr(this.usuario,this.password)==true){
         this.router.navigate(['']);
     }else{
       window.alert("Usuario no valido");
     }
   }
  //private _log:FormularioService, private router:Router
  ngOnInit() {
  }

  ngOnDestroy() {
  }

}

