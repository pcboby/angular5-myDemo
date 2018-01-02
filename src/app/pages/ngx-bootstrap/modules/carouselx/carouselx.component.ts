import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselx',
  templateUrl: './carouselx.component.html',
  styleUrls: ['./carouselx.component.css']
})
export class CarouselxComponent implements OnInit {

  myInterval = 1500;
  slides: any[] = [];
  activeSlideIndex = 0;
  noWrapSlides = false;

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  addSlide(): void {
    this.slides.push({
      image: `assets/download/${this.slides.length % 8 + 1}.jpg`
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }


  ngOnInit() {
  }

}
