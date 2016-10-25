import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  public username: string;

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'bradtraversy';
  }

  getUsername(){
    return this._http.get('https://api.github.com/users/' + this.username + '?client_id=533d9e5a829e549bb32b&client_secret=896f4f34db25b805623f9787ffa239507da90281')
      .map(
        (res: Response) => res.json()
      )
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=533d9e5a829e549bb32b&client_secret=896f4f34db25b805623f9787ffa239507da90281')
      .map(
        (repos: Response) => repos.json()
      )
  }

  updateUser(username: string){
    this.username = username;
  }

}
