import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MATERIAL_COMPONENTS } from "../app.module";

import { APP_PROVIDERS } from '../app.providers';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { FormularioComponent } from './formulario.component';
import { RouterModule } from '@angular/router';
import {routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from "../login/login.component";
import { SearchUserComponent } from '../search-user/search-user.component';
import { GitHubCardComponents } from "../git-hub-card/git-hub-card.component";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioComponent,
        PasivoComponent,
        ReactivoComponent,
        MainComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        SearchUserComponent,
        GitHubCardComponents],
      imports:[FormsModule,
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule],
      providers:[APP_PROVIDERS,
        {provide:APP_BASE_HREF,useValue:'/'}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should validate model',()=>{

    component.usuario='Daniel';
    component.password='Mgstlft3';
    component.confpassword='Mgstlft3';
    component.correo='dan9500dg@gmail.com';

    let navigateSPY=spyOn((<any>component).router,'navigate');

    //component.ValidarUsuario();
    let compiled=fixture.nativeElement;
    compiled.querySelector('button').click();
    
    expect(navigateSPY).toHaveBeenCalledWith(['contact']);

  });


  it('should validate incorrect login with button',()=>{

    component.usuario='Daniel';
    component.password='Mgstlft3';
    component.confpassword='Mgstlft3';
    component.correo='dan9500dggmail.com';

    let spyAlert=spyOn(window,'alert');

    let compiled=fixture.nativeElement;
    compiled.querySelector('button').click();

    expect(spyAlert).toHaveBeenCalledWith('Usuario no valido')

  });
});
