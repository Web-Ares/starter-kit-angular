import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[perfectScroll]' })

export class PerfectScrollDirective {
    constructor(el: ElementRef) {

        Ps.initialize(el.nativeElement);
    }
}
