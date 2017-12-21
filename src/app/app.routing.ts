import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {path: '', redirectTo: '/', pathMatch: 'full'},
    { path: '', loadChildren: './pages/layout/layout.module#LayoutModule'},
    { path: 'login', loadChildren: './pages/plogin/plogin.module#PloginModule'},
    { path: 'signup', loadChildren: './pages/signup/signup.module#SignupModule'},
    { path: 'error', loadChildren: './pages/error/error.module#ErrorModule'},
    { path: '**', redirectTo: 'error' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {}
