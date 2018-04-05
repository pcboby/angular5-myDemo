import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  NgZone,
  AfterViewInit,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  EditorStoreService
} from '../../services/editor-store.service';
import {
  Observable
  // tslint:disable-next-line:import-blacklist
} from 'rxjs/Rx';


@Component({
  selector: 'app-card-offline',
  templateUrl: './card-offline.component.html',
  styleUrls: ['./card-offline.component.css']
})
export class CardOfflineComponent implements OnInit, OnDestroy {
  contents: any = '';
  _cardZone = '';
  // cardid = this.editorService.randomString(8).toLocaleLowerCase();

  @Input() model: any;
  @Input() cardZone = 'card-zone-root-' + this.editorService.randomString(16);

  get element(): HTMLElement {
    return this.el.nativeElement;
  }

  createComponent() {
    const url = this.model.base + this.model.main;
    this.http.get(url, {
      responseType: 'text'
    }).subscribe((data) => {
      this.contents = data
        .replace(/app-root/g, this.cardZone)
        .replace(/src=\"/g, 'src=\"' + this.model.base)
        .replace(/link href=\"/g, 'link href=\"' + this.model.base);

      // console.log('@@@1', cardZone, this.contents);
      this.loadScripts();
    });

  }

  loadScripts() {
    const scripts = this.model.scripts
      .filter(url => !/polyfills\.\w+\.bundle.js$/.test(url))
      .map(url => this.http.get(this.model.base + url, {
        responseType: 'text'
      }));
    Observable.forkJoin(...scripts)
      .subscribe(res => {
        let s = '';
        for (let i = 0; i < res.length; i++) {
          s += `\n/*${this.model.scripts[i]}*/\n` + res[i];
        }
        this.runScripts(s);
      });
  }
  runScripts(s: string) {
    this.zone.runOutsideAngular(() => {
      // tslint:disable-next-line:no-eval
      eval(`(function(_){_['${this.cardZone}']=function(){${s.replace(/app-root/g, this.cardZone)}};})(window)`);
      window[this.cardZone]();
    });
  }



  // tslint:disable-next-line:max-line-length
  constructor(private el: ElementRef, private editorService: EditorStoreService, private zone: NgZone, private http: HttpClient) {}
  ngOnInit() {
    this.createComponent();
  }
  ngOnDestroy() {
    window[this.cardZone] = null;
  }

}
