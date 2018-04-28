import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { Router } from "@angular/router";

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit,OnDestroy {

public usuario:string;
public password:string;
public confpassword:string;
public correo:string;
public nombre:string;



  constructor(private _log:FormularioService, public router:Router) { }

  ValidarUsuario(){
      if(this._log.logUsr(this.usuario,this.password,this.confpassword,this.correo)){
         this.router.navigate(['contact']);
      }else{
         window.alert("Usuario no valido");
     }
     //window.alert("Usuario no valido");
   }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}

