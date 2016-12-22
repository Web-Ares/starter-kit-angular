import {Component} from "@angular/core";
import {NgForm} from '@angular/forms';
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";
import {WEATHER_ITEMS} from "./weather-data";

@Component({
    selector: 'weather-search',
    template: `
    <section class="weather-search">
        <form (ngSubmit)="onSubmit(f)" #f="ngForm" class="weather-search-form">
            <label for="city">City</label>
            <input name="city" ngModel required #first="ngModel" />
            <button type="submit">Add City</button>
        </form>
        <div class="weather-search-result">
            <div>
                <span class="info">City found:</span> <span class="cityName">{{cityName}}</span>
            </div>
            
            <button *ngIf="weatherItem" (click)="addCityItem(weatherItem)" >Add to list</button>
        </div>
    </section>
    `,
    styleUrls: [ 'app/css/app.component.css' ]

})

export class WeatherSearchComponent{

    cityName : string = 'City Name';

    weatherItem : WeatherItem;
    
    
    constructor(private weatherservice : WeatherService){

    }
    
    onSubmit(f : NgForm) {
            
            let resp  = this.weatherservice.searchWeatherData(f.value.city).then(
    
                data => {
    
                    let weatherItem = this.createWeatherItem(data);
                    console.log(weatherItem);
                    this.weatherItem = weatherItem;
                    this.cityName = weatherItem.cityName;
                    
                } );
    
        
            return false;
    
    }
    
    createWeatherItem(data : any){
        
        return new WeatherItem(data.name, data.weather[0].description, data.main.temp);
    }

    addCityItem(weather : WeatherItem){
        
        WEATHER_ITEMS.push(weather);
      
        return WEATHER_ITEMS;
    }
    
}