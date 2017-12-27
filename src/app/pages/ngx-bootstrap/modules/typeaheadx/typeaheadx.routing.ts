import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeaheadxComponent } from './typeaheadx.component';

const routes: Routes = [
    {
      path: '',
      component: TypeaheadxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TypeaheadxRouting {}
