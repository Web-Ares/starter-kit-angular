import { Injectable }    from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AjaxService {

    constructor(public http: Http) { }

    public extractData(res: Response) {

        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        if( res.status == 204 ){
            return { message: 'No content' }
        } else {
            let body = res.json();

            return body || { };
        }



    }
    
    public handleError(error: any): Promise<any> {

        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);

    }

}
