import {Component} from '@angular/core';
import { User } from "./user";

@Component({
    selector: 'user',
    templateUrl: 'app/templates/user.component.html',
    styleUrls: [ 'app/css/app.component.css' ]
})

export class UserComponent {

    selectedUser : User = { id: 1, username: 'Wolverine', email: 'Wolverine@email.com', cost: '10', photo: '/app/img/user1.png' };
    
}
