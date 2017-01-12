import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../components/app.component';
import { TestComponent }  from '../components/test.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, TestComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
