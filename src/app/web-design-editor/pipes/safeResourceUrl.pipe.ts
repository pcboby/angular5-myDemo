import {
  Pipe,
  PipeTransform,
  OnDestroy
} from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeResourceUrlPipe implements PipeTransform, OnDestroy {
  constructor(private sanitizer: DomSanitizer) {}
  private urls = [];

  transform(value: string | File): any {
    let url;
    if (typeof (value) === 'string') {
      url = value as string;
    } else {
      url = URL.createObjectURL(value);
      this.urls.push(url);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnDestroy(): void {
    this.urls.forEach((url) => {
      URL.revokeObjectURL(url);
    });
  }

}
