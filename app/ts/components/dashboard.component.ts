import { Component, Input, Output, EventEmitter }       from '@angular/core';

import { SettingsBindingService }                       from "../services/settings.binding.service";

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent {
    @Input() token:string;
    @Input() settings:string;

    @Output() setTokenToNull: EventEmitter<any> = new EventEmitter();

    constructor( private settingsBindService: SettingsBindingService ){
        this.settingsBindService.getSettings$.subscribe(
            settings => {
                this.settingsBindService.sendSettings( this.settings );
            });
    }

    logout():void {

        this.setTokenToNull.emit( null )

    }

}