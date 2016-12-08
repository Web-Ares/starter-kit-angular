import {NgModule}                  from "@angular/core";
import {RouterModule, Routes}      from "@angular/router";


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'works',
        pathMatch: 'full'
    },
    {
        path: 'works',
        loadChildren: 'app/js/modules/works.module#WorksModule'
    },
    {
        path: 'users',
        loadChildren: 'app/js/modules/users.module#UsersModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}