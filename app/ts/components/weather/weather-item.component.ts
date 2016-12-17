import {Component, Input} from '@angular/core';
import {WeatherItem} from "./weather-item";

@Component({
    selector: 'weather-item',
    template:
        `
        <article>
            <div class="col-1">
                <h3>{{weatherItem.cityName}}</h3>
                <p class="info">{{weatherItem.description}}</p>
            </div>  
            <div class="col-2">
                <h3>Temperature</h3>
                <span  class="temperature">{{weatherItem.temperature}} °C</span>
            </div>  
            
        </article>
    `,
    styleUrls: [ 'app/css/app.component.css' ],
    // inputs:['weatherItem : item']

})

export class WeatherItemComponent {
   @Input('item') weatherItem: WeatherItem;
}