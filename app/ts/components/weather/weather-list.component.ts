import {Component, OnInit} from '@angular/core';
import {WEATHER_ITEMS} from './weather-data';
import {WeatherItem} from './weather-item';


@Component({
    selector: 'weather-list',
    template:
        `
        <section class="weather-list">
            <weather-item *ngFor="let weatherItem of weatherItems" [item]="weatherItem"></weather-item>
        </section>
        `,
    styleUrls: [ 'app/css/app.component.css' ]
})


export  class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];

    ngOnInit():any {
        this.weatherItems = WEATHER_ITEMS;
    }
}