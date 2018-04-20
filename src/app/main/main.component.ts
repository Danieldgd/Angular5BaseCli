import { Component, OnInit } from '@angular/core';
import { GitHubService } from "../services/git-hub.service";
import { SearchUserComponent } from "../search-user/search-user.component";
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //gitHubData:GitHubModel;
  gitHubDataList:Array<GitHubModel>;

  constructor(private _gitHubService:GitHubService) { 
    this.gitHubDataList=new Array<GitHubModel>();
  }

  ngOnInit() {
    /*this._gitHubService
     .getUserInfo('Danieldgd')
     .subscribe(x=>{
       this.gitHubData=new GitHubModel();
       this.gitHubData=x;
     });*/
  }

  onSearchUser(userName:string){
    this._gitHubService
    .getUserInfo(userName)
    .subscribe(x=>{
      this.gitHubDataList.push(x);
      /*this.gitHubData=new GitHubModel();
      this.gitHubData=x;*/
    });
  }

  deleteObject(obj:GitHubModel){
   this.gitHubDataList=this.gitHubDataList.filter(x => x !== obj);
  }

}
