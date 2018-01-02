import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsxComponent } from './tabsx.component';

const routes: Routes = [
    {
      path: '',
      component: TabsxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsxRouting {}
