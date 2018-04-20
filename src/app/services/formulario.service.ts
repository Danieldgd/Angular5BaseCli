import { Injectable } from '@angular/core';




@Injectable()
export class FormularioService {

  constructor() { }

  logUsr(usu:string,psw:string){
    return usu=='Danieldgd' && psw=='1234';
  }

}