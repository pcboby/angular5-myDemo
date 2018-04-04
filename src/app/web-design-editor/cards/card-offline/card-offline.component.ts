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


@Component({
  selector: 'app-card-offline',
  templateUrl: './card-offline.component.html',
  styleUrls: ['./card-offline.component.css']
})
export class CardOfflineComponent implements OnInit, AfterContentInit {

  contents: any = '';
  cardid = this.editorService.randomString(8).toLocaleLowerCase();

  @Input() model: any;
  @Input() cardZone = this.editorService.randomString(8);

  // get element(): HTMLElement {
  //   return this.el.nativeElement;
  // }

  createComponent() {
    const url = this.model.base + this.model.main;
    this.http.get(url, {
      responseType: 'text'
    }).subscribe((data) => {
      this.contents = data
        .replace(/app-root/g, 'card-root-' + this.cardZone)
        .replace(/src=\"/g, 'src=\"' + this.model.base)
        .replace(/link href=\"/g, 'link href=\"' + this.model.base);

      console.log('@@@2', this.cardZone, this.contents);
      this.zone.runOutsideAngular(() => {
        this.loadScripts();
      });
    });

  }

  loadScripts() {
    const scripts = this.model.scripts.filter(url => !/polyfills\.\w+\.bundle.js$/.test(url))
      .map(url => this.http.get(this.model.base + url, {
        responseType: 'text'
      }));
    concat(...scripts)
      // .pipe(
      //   // map(c => (this.model.scripts).concat(c).join('\n\n/*******************/\n\n'))
      // )
      .subscribe(res => {

        console.log('@@@2', this.cardZone);
        // tslint:disable-next-line:no-eval
        // debugger;
        eval(String(res).replace(/app-root/g, 'card-root-' + this.cardZone));
        // const n = SystemJS.normalizedUrl(`card-complate-${this.cardZone}.js`);
        // SystemJS.define(n, res);
        // SystemJS.import(n).then(m => {
        //   console.log(m);
        // });
      });
    console.log('@@createScripts');
  }



  // tslint:disable-next-line:max-line-length
  constructor(private editorService: EditorStoreService, private zone: NgZone, private http: HttpClient) {}
  ngOnInit() {}
  ngAfterContentInit() {
    this.createComponent();

  }

}
