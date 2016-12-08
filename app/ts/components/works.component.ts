import { Component }                from '@angular/core';
import { Subscription }             from "rxjs";

import { SettingsBindingService }   from "../services/settings.binding.service";

const TEXT: Object = {
    en: [
        {
            text: 'Tasks',
            url: 'works/tasks'
        },
        {
            text: 'Time Lines',
            url: 'works/terms'
        }
    ]
};

@Component({
    selector: 'works',
    templateUrl: 'app/templates/works.component.html',
    styleUrls: ['app/css/works.component.css']
})
export class WorksComponent {

    settings;
    subscription: Subscription;

    texts:Object[];


    constructor( private settingsBindService: SettingsBindingService ){

        this.subscription = settingsBindService.sattingsChanged$.subscribe(
            settings => {
                this.settings = settings;
            });

        this.settingsBindService.getSettings( this.settings );

    }

    ngOnInit(){
        this.texts = TEXT[ this.settings[ 'language' ] ];
    }
}