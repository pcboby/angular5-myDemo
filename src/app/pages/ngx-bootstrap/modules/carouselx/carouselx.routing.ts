import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselxComponent } from './carouselx.component';

const routes: Routes = [
    {
      path: '',
      component: CarouselxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarouselxRouting {}
