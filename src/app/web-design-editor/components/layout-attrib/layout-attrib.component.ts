import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { EditorStoreService } from '../../services/editor-store.service';

@Component({
  selector: 'app-layout-attrib',
  templateUrl: './layout-attrib.component.html',
  styleUrls: ['./layout-attrib.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutAttribComponent implements OnInit, OnChanges {
  _editors = [];
  editors = [];

  @Input() model: any = {};

  constructor(public editorService: EditorStoreService) {}

  save(): void {
    this.model.editors = this.editorService.clone(this.editors);
  }
  reset(): void {
    this.editors = this.editorService.clone(this._editors);
    this.model.editors = this.editorService.clone(this._editors);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.editors = this.editorService.clone(this.model.editors);
    this._editors = this.editorService.clone(this.model.editors);
  }


}


