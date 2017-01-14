import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../components/app.component';
import { SnakeComponent }  from '../components/test.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, SnakeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
