import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: ['app/css/dashboard.component.css']
})
export class DashboardComponent {
    @Input() token:string;
    @Output() setTokenToNull: EventEmitter<any> = new EventEmitter();

    logout():void {

        this.setTokenToNull.emit( null )

    }

}