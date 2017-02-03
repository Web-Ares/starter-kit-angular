import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from '../components/app.component';
import { LoginComponent } from "../components/login.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
