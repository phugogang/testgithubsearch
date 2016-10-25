import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   user: any;
   reposUser: any;
   username: string;

  constructor(private _profileService: ProfileService) {


  }

  onSearch(){

    this._profileService.updateUser(this.username);
    this._profileService.getUsername()
      .subscribe(user => {
          this.user = user;
        console.log(user)
      });


    this._profileService.getRepos()
      .subscribe(repos => this.reposUser = repos);
  }

  ngOnInit() {
  }

}
