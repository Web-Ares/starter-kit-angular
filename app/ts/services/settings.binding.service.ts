import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SettingsBindingService {

    // Observable string sources
    private settingsParentSource = new Subject<string>();
    private settingsChildSource = new Subject<string>();

    // Observable string streams
    getSettings$ = this.settingsParentSource.asObservable();
    sattingsChanged$ = this.settingsChildSource.asObservable();

    // Service message commands
    getSettings( settings: string ) {
        this.settingsParentSource.next( settings );
    }
    sendSettings( settings: string ) {
        this.settingsChildSource.next( settings );
    }
}
