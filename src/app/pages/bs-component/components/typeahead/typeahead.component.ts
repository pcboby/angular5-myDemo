import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild ,Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { NgbTypeahead } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


  const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
  const PARAMS = new HttpParams({
    fromObject: {
      action: 'opensearch',
      format: 'json',
      origin: '*'
    }
  });

  @Injectable()
  export class WikipediaService {
    constructor(private http: HttpClient) {}

    search(val: string) {
      if (val === '') {
        return of([]);
      }

      return this.http
        .get(WIKI_URL, {params: PARAMS.set('search', val)})
        .map(function(res){
          return res[1];
        });
        // .map(response => response[1]);
    }
  }

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
  providers: [WikipediaService]
})
export class TypeaheadComponent {

  public model: any;
  public model1: any;
  public model2: any;
  public model3: any;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  search = (text$: Observable<string>) =>
  text$
  .debounceTime(200)
  .distinctUntilChanged()
  .map(term => term.length < 2 ? []
    : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));



  search1 = (text$: Observable<string>) =>
    text$
    .debounceTime(200).distinctUntilChanged()
    .merge(this.focus$)
    .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
    .map(term => (term === '' ? states : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10));


  formatter = (result: string) => result.toUpperCase();

  search2 = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


  constructor(private _service: WikipediaService) {}

  search3 = (text$: Observable<string>) =>
          text$
            .debounceTime(300)
            .distinctUntilChanged()
            .do(() => this.searching = true)
            .switchMap(term =>
              this._service.search(term)
                .do(() => this.searchFailed = false)
                .catch(() => {
                  this.searchFailed = true;
                  return of([]);
                }))
            .do(() => this.searching = false)
            .merge(this.hideSearchingWhenUnsubscribed);

}
