import { Directive, ElementRef } from '@angular/core';

const OAUTH: Object = {
    response_type: 'code',
    access_type: 'offline',
    approval_prompt: 'force',
    client_id: '342787047268-78asn05bdhvl4t99cgpt7f1ijulsson8.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3010',
    scope: 'https://www.googleapis.com/auth/userinfo.email'
};

@Directive({
    selector: '[googleAuth]'
})
export class GoogleAuthDirective {

    constructor( el: ElementRef ) {
        el.nativeElement.href = this.getLink();
    }

    private getLink():string {
        let link: string = 'https://accounts.google.com/o/oauth2/auth?';

        for ( let key in OAUTH ) {
            link += `${ key }=${ OAUTH[ key ] }&`;
        }

        return link;
    }
}
