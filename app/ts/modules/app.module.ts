import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from '../components/app.component';
import { WeatherItemComponent }  from '../components/weather/weather-item.component';
import { WeatherListComponent }  from '../components/weather/weather-list.component';
import { WeatherService }  from '../components/weather/weather.service';
import { ContactComponent }  from '../components/pages/contact.component';
import {WeatherSearchComponent} from "../components/weather/weather-search.component";
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import {ContactComponent} from '../components/pages/contact.component';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'contact',
                component: ContactComponent
            }
        ])],
    declarations: [ AppComponent, WeatherItemComponent, WeatherListComponent, WeatherSearchComponent,ContactComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [WeatherService]
})
export class AppModule { }
