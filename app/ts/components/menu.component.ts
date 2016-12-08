import {Component, Input} from '@angular/core';

const TEXT: Object = {
    en: [
        {
            text: 'Works',
            url: 'works'
        },
        {
            text: 'Users',
            url: 'users'
        }
    ],
    ru: [
        {
            text: 'Робота',
            url: 'works'
        },
        {
            text: 'Юзеры',
            url: 'users'
        }
    ]
};

@Component({
    selector: 'menu',
    templateUrl: 'app/templates/menu.component.html',
    styleUrls: ['app/css/menu.component.css']
})
export class MenuComponent {

    @Input() settings:string;

    texts:Object[] =[3,4];

    ngOnInit(){


        this.texts = TEXT[ this.settings[ 'language' ] ];

    }


}