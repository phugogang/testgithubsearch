import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {ProfileService} from './profile/profile.service';



import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
