import { AppRoutingModule }        from "./app.routing.module";
import { BrowserModule }           from '@angular/platform-browser';
import { NgModule, enableProdMode }                from '@angular/core';
// enableProdMode();

import { AppComponent }            from '../components/app.component';
import { DashboardComponent }      from "../components/dashboard.component";
import { LoginComponent }          from "../components/login.component";
import { MenuComponent }           from "../components/menu.component";

import { GoogleAuthDirective }     from "../directives/google.auth.directive";
import { PerfectScrollDirective }  from "../directives/perfect.scroll.directive";

import { SettingsBindingService }      from "../services/settings.binding.service";

@NgModule({
    imports:      [
        AppRoutingModule,
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
    providers: [
        SettingsBindingService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
