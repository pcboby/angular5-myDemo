import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  NgZone,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  EditorStoreService
} from '../../services/editor-store.service';
import {
  concat
} from 'rxjs/observable/concat';
import {
  map
} from 'rxjs/operators';
import {
  System
} from 'es-module-loader/core/loader-polyfill.js';
import {
  toArray
} from 'rxjs/operator/toArray';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-card-offline',
  templateUrl: './card-offline.component.html',
  styleUrls: ['./card-offline.component.css']
})
export class CardOfflineComponent implements OnInit {
  contents: any = '';
  // cardid = this.editorService.randomString(8).toLocaleLowerCase();

  @Input() model: any;
  @Input() cardZone = this.editorService.randomString(8);

  // get element(): HTMLElement {
  //   return this.el.nativeElement;
  // }

  createComponent(cardZone) {
    const url = this.model.base + this.model.main;
    this.http.get(url, {
      responseType: 'text'
    }).subscribe((data) => {
      this.contents = data
        .replace(/app-root/g, 'card-root-' + cardZone)
        .replace(/src=\"/g, 'src=\"' + this.model.base)
        .replace(/link href=\"/g, 'link href=\"' + this.model.base);

      console.log('@@@1', cardZone, this.contents);
      this.zone.runOutsideAngular(() => {
        this.loadScripts(cardZone);
      });
    });

  }

  loadScripts(cardZone) {

    console.log('@@@2', cardZone);
    const scripts = this.model.scripts.filter(url => !/polyfills\.\w+\.bundle.js$/.test(url))
      .map(url => this.http.get(this.model.base + url, {
        responseType: 'text'
      }));
    concat(...scripts)
      // .pipe(
      //   map(c => this.model.scripts.concat(c).join('\n\n////////////\n\n'))
      // )
      .subscribe(res => {
        const s = String(res).replace(/app-root/g, 'card-root-' + cardZone);
        setTimeout(() => {
          eval(s);
        }, 100);
      });
    console.log('@@createScripts');
  }



  // tslint:disable-next-line:max-line-length
  constructor(private editorService: EditorStoreService, private zone: NgZone, private http: HttpClient) {}
  ngOnInit() {
    this.createComponent(this.cardZone);

  }

}
