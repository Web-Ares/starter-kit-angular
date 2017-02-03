import { Directive, ElementRef } from '@angular/core';

declare let Ps: any;

@Directive({ selector: '[perfectScroll]' })
export class PerfectScrollDirective {
    constructor(el: ElementRef) {
        Ps.initialize(el.nativeElement);
    }
}
