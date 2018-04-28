import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from '../app.providers';
import { SearchUserComponent } from './search-user.component';
import { MATERIAL_COMPONENTS } from "../app.module";
import { RouterModule } from '@angular/router';
import {routes } from '../app.component';
import { FormularioComponent } from "../formulario/formulario.component";
import { FormularioService } from '../services/formulario.service';
import { userInfo } from 'os';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from "../login/login.component";
import { GitHubCardComponents } from "../git-hub-card/git-hub-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';



describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        APP_PROVIDERS,
        MainComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        FormularioComponent,
        SearchUserComponent,
        GitHubCardComponents,
        PasivoComponent,
        ReactivoComponent
      ],
      providers:[APP_PROVIDERS],
      imports:[MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*
  it('should call onSearchClick',()=>{
    component.userName='Danieldgd';
    component.onSearchUser.subscribe(x=>{
      expect(x).toEqual('Danieldgd')
    });
    component.onSearchClick();
  });
*/
/*
  it('should call onSearchClick in view',()=>{
    component.userName='Danieldgd';
    component.onSearchUser.subscribe(x=>{
      expect(x).toEqual('Danieldgd')
    });
    let compiled=fixture.nativeElement;
    compiled.querySelector('button').click();
  });
*/
});
