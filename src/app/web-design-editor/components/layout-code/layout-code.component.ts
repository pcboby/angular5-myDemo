import { Component, OnInit, Input } from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';
@Component({
  selector: 'app-layout-code',
  templateUrl: './layout-code.component.html',
  styleUrls: ['./layout-code.component.scss']
})
export class LayoutCodeComponent implements OnInit {

  @Input()
  model;

  constructor(public editorService: EditorStoreService) { }

  ngOnInit() {
  }

}
