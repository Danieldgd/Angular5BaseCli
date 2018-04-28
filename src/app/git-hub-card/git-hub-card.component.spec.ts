import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_PROVIDERS } from '../app.providers';
import { GitHubCardComponents } from './git-hub-card.component';
import { GitHubModel } from "../model/git-hub-model";

describe('ReactivoComponent', () => {
  let component: GitHubCardComponents;
  let fixture: ComponentFixture<GitHubCardComponents>;
  let gitHubData:GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCardComponents ],
      providers:[APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    gitHubData=new GitHubModel();
    gitHubData.avatar_url='';
    gitHubData.user='Danieldgd';
    gitHubData.name='Daniel Garcia';
    gitHubData.followers=0;
    gitHubData.following=0;
    fixture = TestBed.createComponent(GitHubCardComponents);
    component = fixture.componentInstance;
    //fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate model',()=>{
    component.gitHubData=gitHubData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should validate model in the view',()=>{
    component.gitHubData=gitHubData;
    const compiled=fixture.nativeElement;
    fixture.detectChanges();//PRUEBAS EN VISTA LO QUE SE ESCRIBE
    expect(compiled.querySelector('.data-container #name').textContent).toContain(`Nombre:${gitHubData.name}`)
  });



});
