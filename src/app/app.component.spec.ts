import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MATERIAL_COMPONENTS } from "./app.module";
import { RouterModule } from '@angular/router';
import {routes } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from "./login/login.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { SearchUserComponent } from './search-user/search-user.component';
import { GitHubCardComponents } from "./git-hub-card/git-hub-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PasivoComponent } from './pasivo/pasivo.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { APP_BASE_HREF } from "@angular/common";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
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
      imports:[MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule],
      providers:[{provide:APP_BASE_HREF,useValue:'/'}]
        
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));


  it('prueba',()=>{
    let texto='Danieldgd'
    expect(texto).toEqual('Danieldgd')
  })
  it('should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');
  }));
});
