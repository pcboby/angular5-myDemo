import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxDndxComponent } from './ngx-dndx.component';

const routes: Routes = [
    {
        path: '',
        component: NgxDndxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgxDndxRouting { }
