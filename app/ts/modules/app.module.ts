import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../components/app.component';
import { WeatherItemComponent }  from '../components/weather/weather-item.component';
import { WeatherListComponent }  from '../components/weather/weather-list.component';
import { WeatherService }  from '../components/weather/weather.service';
import {WeatherSearchComponent} from "../components/weather/weather-search.component";
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


@NgModule({
    imports:      [ BrowserModule,FormsModule,HttpModule ],
    declarations: [ AppComponent, WeatherItemComponent, WeatherListComponent, WeatherSearchComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [WeatherService]
})
export class AppModule { }
