import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebDesignEditorComponent } from './webDesignEditor.component';

const routes: Routes = [
    {
      path: '',
      component: WebDesignEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebDesignEditorRouting {}
