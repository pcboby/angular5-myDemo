import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StatesData } from './states-data';
import { StatesComplex } from './states-complex';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-typeaheadx',
  templateUrl: './typeaheadx.component.html',
  styleUrls: ['./typeaheadx.component.css']
})
export class TypeaheadxComponent implements OnInit {

  selected: string;
  data = StatesData;
  customSelected: string;
  complex = StatesComplex;
  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;
  statesComplex = StatesComplex;
  states = StatesData;
  groupSelected: string;
  stateCtrl: FormControl = new FormControl();

  myForm: FormGroup = new FormGroup({
    state: this.stateCtrl
  });

  constructor() {
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    }).mergeMap((token: string) => this.getStatesAsObservable(token));
  }
  getStatesAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.statesComplex.filter((state: any) => {
        return query.test(state.name);
      })
    );
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  changeTypeaheadNoResults(e: boolean): void {
    this.typeaheadNoResults = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }

  ngOnInit() {
  }

}
