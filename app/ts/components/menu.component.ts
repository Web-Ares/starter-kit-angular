import {Component} from '@angular/core';

const TEXT: Object = {
    response_type: 'code',
    access_type: 'offline',
    approval_prompt: 'force',
    client_id: '342787047268-78asn05bdhvl4t99cgpt7f1ijulsson8.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3010',
    scope: 'https://www.googleapis.com/auth/userinfo.email'
};

@Component({
    selector: 'menu',
    templateUrl: 'app/templates/menu.component.html',
    styleUrls: ['app/css/menu.component.css']
})
export class MenuComponent {

}