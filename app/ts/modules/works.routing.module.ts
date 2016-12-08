import { NgModule }                  from "@angular/core";
import { RouterModule, Routes }      from "@angular/router";

import { WorksComponent }            from "../components/works.component";


export const routes: Routes = [
    {
        path: '',
        component: WorksComponent,
        children: [
            {
                path: '',
                redirectTo: 'tasks',
                pathMatch: 'full'
            },
            {
                path: 'tasks',
                loadChildren: 'app/js/modules/tasks.module#TasksModule',
                pathMatch: 'full'
            },
            {
                path: 'terms',
                loadChildren: 'app/js/modules/terms.module#TermsModule',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class WorksRoutingModule {
}