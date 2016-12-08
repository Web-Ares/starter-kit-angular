import { NgModule }                   from "@angular/core";
import { TasksRoutingModule }         from "./tasks.routing.module";

import { TasksComponent }             from "../components/tasks.component";

@NgModule({
    imports: [
        TasksRoutingModule
    ],
    declarations: [
        TasksComponent
    ]
})
export class TasksModule {

}