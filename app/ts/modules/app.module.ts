import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../components/app.component';
import {UsersComponent} from "../components/users/users.component";
import {UserComponent} from "../components/users/user.component";
import {HeaderComponent} from "../components/header.component";



@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, UsersComponent, UserComponent, HeaderComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
