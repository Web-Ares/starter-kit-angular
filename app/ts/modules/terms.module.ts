import { NgModule }                   from "@angular/core";
import { TermsRoutingModule }         from "./terms.routing.module";

import { TermsComponent }             from "../components/terms.component";

@NgModule({
    imports: [
        TermsRoutingModule
    ],
    declarations: [
        TermsComponent
    ]
})
export class TermsModule {

}