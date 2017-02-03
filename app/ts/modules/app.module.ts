import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from '../components/app.component';
import { LoginComponent } from "../components/login.component";
import {GoogleAuthDirective} from "../directives/google.auth.directive";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        LoginComponent,

        GoogleAuthDirective
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
