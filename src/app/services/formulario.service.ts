import { Injectable } from '@angular/core';




@Injectable()
export class FormularioService {

  constructor() { }
/*
  logUsr(usu:string,psw:string){
    return usu=='Danieldgd' && psw=='1234';
  }*/

  
  logUsr(usu:string,psw:string,cpass:string,correo:string){

    //Regex Javascript
    //85
    var i,v1,v2,v3,v4=0;
    var cadena="@"

    for(i=0;i<psw.length;i++)
    {
        if('A' <= psw[i] && psw[i] <= 'Z') 
            v1++;
        if('a' <= psw[i] && psw[i] <= 'z') 
            v2++;
        if('0' <= psw[i] && psw[i] <= '9') 
            v3++;
    }
    
    if(correo.indexOf(cadena) != -1){
      v4=1;
    }

    if(usu.length>=5 && usu.length<=15 && v1,v2,v3,v4!=0 && cpass==psw){
        return true;
    }

  }

}