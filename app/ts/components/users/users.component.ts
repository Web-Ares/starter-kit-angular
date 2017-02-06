import {Component,OnInit} from '@angular/core';
import {User} from "./user";
import {UserService} from "../services/user.service";


@Component({
    selector: 'all-users',
    templateUrl: 'app/templates/users.component.html',
    styleUrls: [ 'app/css/app.component.css' ],
    providers: [UserService]
})

export class UsersComponent implements OnInit {

    Users : User[];

    constructor(private heroService: UserService) { }
    
    getHeroes(): void {
        this.Users = this.heroService.getUsers();
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    
}
