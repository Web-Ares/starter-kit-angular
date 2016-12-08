import { CommonModule }               from "@angular/common";
import { NgModule }                   from "@angular/core";
import { WorksRoutingModule }         from "./works.routing.module";

import { WorksComponent }             from "../components/works.component";

@NgModule({
    imports: [
        WorksRoutingModule,
        CommonModule
    ],
    declarations: [
        WorksComponent
    ]
})
export class WorksModule {

}