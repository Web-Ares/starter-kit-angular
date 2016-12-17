import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../components/app.component';
import { WeatherItemComponent }  from '../components/weather/weather-item.component';
import { WeatherListComponent }  from '../components/weather/weather-list.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, WeatherItemComponent, WeatherListComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
