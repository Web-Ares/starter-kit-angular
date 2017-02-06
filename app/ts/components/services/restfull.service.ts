import {Headers, RequestMethod, RequestOptions, URLSearchParams} from '@angular/http';
import { AjaxService } from '../services/ajax.service';

import 'rxjs/add/operator/toPromise';

export class RestfullService extends AjaxService{

    path:string = '';

    public all( token : string ): Promise<any> {

        let url = `http://dev.api.websters.com.ua/api/v1/${ this.path }`,
            options = new RequestOptions({
                method: RequestMethod.Get,
                headers: new Headers( {
                    'Authorization': token
                })
            });

        return this.http.get( url, options )
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public delete( token : string, id : number ){

        let url = `http://dev.api.websters.com.ua/api/v1/${ this.path }/${id}`,
            options = new RequestOptions({
                method: RequestMethod.Delete,
                headers: new Headers( {
                    'Authorization': token
                })
            });

        return this.http.get( url, options )
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public create( token : string , params : any ): Promise<any> {

        let requestParams = new URLSearchParams();

        for(const param in params) {
            requestParams.set( param, params[ param ] );
        }

        let url = `http://dev.api.websters.com.ua/api/v1/${ this.path }`,
            options = new RequestOptions({
                method: RequestMethod.Post,
                headers: new Headers( {
                    'Authorization': token
                }),
                search: requestParams
            });

        return this.http.get( url, options )
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public update( token : string, params : any, id : number ): Promise<any> {

        let requestParams = new URLSearchParams();

        for(const param in params) {
            requestParams.set( param, params[ param ] );
        }

        let url = `http://dev.api.websters.com.ua/api/v1/${ this.path }/${id}`,
            options = new RequestOptions({
                method: RequestMethod.Put,
                headers: new Headers( {
                    'Authorization': token
                }),
                search: requestParams
            });

        return this.http.get( url, options )
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

}
