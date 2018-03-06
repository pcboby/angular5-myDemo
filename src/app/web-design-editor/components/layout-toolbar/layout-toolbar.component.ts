import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input
} from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';

@Component({
  selector: 'app-layout-toolbar',
  templateUrl: './layout-toolbar.component.html',
  styleUrls: ['./layout-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutToolbarComponent implements OnInit {

  constructor(public editorService: EditorStoreService) {
  }

  ngOnInit() {}

}
