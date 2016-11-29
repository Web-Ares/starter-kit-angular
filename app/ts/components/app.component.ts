import {Component} from '@angular/core';
@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: [ 'app/css/app.component.css' ]
})
export class AppComponent {
    token:string;

    constructor(){

        this.authenticate();

    }

    private auth(){
        let code: string,
            token: string,
            hash = location.search.substring(1).split('&'),
            parameters: Object = {};

        for( let item of hash ){
            let param = item.split( '=' );

            parameters[ param[ 0 ] ] = param[ 1 ];
        }

        if( parameters[ 'code' ] ){
            this.token = decodeURI( parameters[ 'code' ] ).replace( '%2F', '/' );
            window.localStorage.setItem( 'token', this.token );

        }

    }

    private authenticate():void {

        if( location.search && location.search.indexOf('code') > 0){
            location.search = '';

            this.auth();

        } else {

            let token = window.localStorage.getItem( 'token' );

            if( token ) this.token = token;

        }

    }

    logout():void{
        let token = window.localStorage.removeItem( 'token' );

        this.token = null;
    }
}
