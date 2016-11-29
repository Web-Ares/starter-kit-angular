import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';

import { AppComponent }            from '../components/app.component';
import { DashboardComponent }      from "../components/dashboard.component";
import { LoginComponent }          from "../components/login.component";
import { MenuComponent }           from "../components/menu.component";

import { GoogleAuthDirective }     from "../directives/google.auth.directive";
import { PerfectScrollDirective }  from "../directives/perfect.scroll.directive";

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        MenuComponent,

        GoogleAuthDirective,
        PerfectScrollDirective
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
