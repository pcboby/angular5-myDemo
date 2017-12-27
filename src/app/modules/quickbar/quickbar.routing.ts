import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickbarComponent } from './quickbar.component';

const routes: Routes = [
    {
      path: '',
      component: QuickbarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuickbarRouting {}
