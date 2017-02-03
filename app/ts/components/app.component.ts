import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app/templates/app.component.html',
    styleUrls: [ 'app/css/app.component.css' ]
})
export class AppComponent {

    public data:Object = {};
    
    constructor(){
        this.login();
    }

    public login(){
        let token = window.localStorage.getItem( 'token' );

        if( token ){
            this.data[ 'token' ] = token;
        } else {
            this.checkCode();
        }

    }

    public checkCode(){
        let search = location.search.substr( 1 ).split( '&' ),
            token:string = null;
        
        search.forEach( function ( item:string ) {

            let str = item.split( '=' );

            if( str[ 0 ] == 'code' ){
                token = str[ 1 ];

                return false;
            }

        } );

        if( !token ){
            window.localStorage.setItem( 'token', token );

            this.data[ 'token' ] = token;
        }
    }

}

