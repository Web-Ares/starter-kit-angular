import { RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from "@angular/core";
import {WEATHER_ITEMS} from "./weather-data";
import {WeatherItem} from "./weather-item";
import {AjaxService} from "./ajax.service";


@Injectable()

export class WeatherService extends AjaxService{

    public getWeatherItems(): WeatherItem[]{
        return WEATHER_ITEMS;
    }

    public searchWeatherData( cityName : string ): Promise<any> {

        let
        url = 'http://api.openweathermap.org/data/2.5/weather?q=',
        appID = '&APPID=caf84b9159ddfddc408d39495118d9ef&units=metric',
        country = cityName,
        currentUrl = url+country+appID,
        options = new RequestOptions({
        method: RequestMethod.Get
        });



        return this.http.get( currentUrl, options )
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

}