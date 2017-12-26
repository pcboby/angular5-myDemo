import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonxComponent } from './buttonx.component';

const routes: Routes = [
    {
      path: '',
      component: ButtonxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ButtonxRouting {}
