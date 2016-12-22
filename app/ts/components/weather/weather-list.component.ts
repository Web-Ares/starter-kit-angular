import {Component, OnInit} from '@angular/core';
import {WeatherItem} from './weather-item';
import {WeatherService} from './weather.service';

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

    constructor(private weatherService : WeatherService){

    }

    ngOnInit():any {
        this.weatherItems = this.weatherService.getWeatherItems();
    }
    
}