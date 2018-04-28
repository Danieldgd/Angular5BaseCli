import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchUserComponent } from '../search-user/search-user.component';
import { GitHubCardComponents } from "../git-hub-card/git-hub-card.component";
import { MATERIAL_COMPONENTS } from "../app.module";
import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_PROVIDERS } from '../app.providers';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { GitHubService } from '../services/git-hub.service';
import { GitHubServiceMock } from '../../mock-services/git-hub.service.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent,
        GitHubCardComponents,
        SearchUserComponent ],
      imports:[ MATERIAL_COMPONENTS,
              FormsModule,
              HttpClientModule,
              BrowserAnimationsModule],
      providers:[{
        provide:GitHubService,
        useClass:GitHubServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add trhee elements to card array',()=>{
    expect(component.gitHubDataList.length).toEqual(0);
    component.onSearchUser('Danieldgd');
    component.onSearchUser('Danieldgd');
    component.onSearchUser('Danieldgd');
    expect(component.gitHubDataList.length).toEqual(3);
  });

});
