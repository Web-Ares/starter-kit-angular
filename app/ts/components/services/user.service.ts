import { Injectable } from '@angular/core';
import {Users} from "../mock/users.mock";
import {User} from "../users/user";

@Injectable()
export class UserService {
    
   getUsers() : User[]{

       return Users;

   } 
    
}